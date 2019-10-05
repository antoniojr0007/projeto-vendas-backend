const { test, trait} = use('Test/Suite')('Forgot Password');

const { subHours, format } = require('date-fns');

const Mail = use('Mail');
const Hash = use('Hash');
const Database = use('Database');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

/**@type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should send an email with reset password instructions', async ({ assert, client }) => {
  Mail.fake();

  const email = 'antonio@grupooliver.com.br';

  const user = await Factory.model('App/Models/User').create({ email });

  await client
    .post('/forgot')
    .send({ email })
    .end();

  const token = await user.tokens().first();

  const recentEmail = Mail.pullRecent();

  assert.equal(recentEmail.message.to[0].address, email);

  assert.include(token.toJSON(), {
    type: 'forgotpassword',
  });

  Mail.restore();
});

//Chama uma rota /reset (token, senha nova, confirmaçao, senha prescisa mudar)
//ele só vai resetar se o token tiver sido criado em menos de 2 horas
test('it should be able to reset password ', async({ assert, client }) =>{

  const email = 'antonio@grupooliver.com.br';

  const user = await Factory.model('App/Models/User').create({ email })
  const userToken = await Factory.model('App/Models/Token').make()

  await user.tokens().save(userToken)

  await client.post('/reset')
    .send({
      token: userToken.token,
      password:'123456',
      password_confirmation:'123456'
    })
    .end()

  await user.reload();''
  const checkPassword = await Hash.verify('123456', user.password);

  assert.isTrue(checkPassword);

});

test('it cannto reset password after 2h of forgot password request', async({ client }) =>{

  const email = 'antonio@grupooliver.com.br';

  const user = await Factory.model('App/Models/User').create({ email });
  const userToken = await Factory.model('App/Models/Token').make();

  await user.tokens().save(userToken);

  const dateWithSub = format(subHours(new Date(), 2), 'yyyy-MM-dd HH:ii:ss');

  await Database.table('tokens')
    .where('token', userToken.token)
    .update('created_at', dateWithSub);

  await userToken.reload();

  const response = await client
    .post('/reset')
    .send({
      token: userToken.token,
      password: '123456',
      password_confirmation: '123456',
    })
    .end();

  response.assertStatus(400);

})
