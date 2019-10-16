const { test, trait } = use('Test/Suite')('User');

/** @type {typeof import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Helpers = use('Helpers');
const Hash = use('Hash');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient');
trait('DatabaseTransactions');
trait('Auth/Client');

test('it should be able to update profile', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create({
    name: 'Antonio Junior',
    password: '123123',
  });

  const response = await client
    .put('/profile')
    .loginVia(user, 'jwt')
    .field('name', 'Antonio Junior')
    .field('password', '123456')
    .field('password_confirmation', '123456')
    .attach('avatar', Helpers.tmpPath('test/avatar.png'))
    .end();

  response.assertStatus(200);
  assert.equal(response.body.name, 'Antonio Junior');
  assert.exists(response.body.avatar);

  await user.reload();
  assert.isTrue(await Hash.verify('123456', user.password));
});

// test('it should be able to update user', async ({ assert, client }) => {
//   const user = await Factory.model('App/Models/User').create({
//     name: 'Antonio Junior',
//     email: 'antonio@grupooliver.com.br',
//   });

//   const response = await client
//     .put(`/users/${user.id}`)
//     .loginVia(user, 'jwt')
//     .send({ name: 'Antonio Junior', email: 'antonio@grupooliver.com.br' })
//     .end();

//   response.assertStatus(200);
//   assert.exists(response.body.user);
// });

test('it should be able to delete a user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const response = await client
    .delete(`/users/${user.id}`)
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(204);

  const checkUser = await User.find(user.id);

  assert.isNull(checkUser);
});
