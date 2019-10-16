const { test, trait } = use('Test/Suite')('Contact');

/** @type {typeof import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should return contact created', async ({ assert, client }) => {
  const contactPayload = {
    name: 'Antonio Jr',
    contact: '1234567890',
    type: 'fixo',
    title: 'casa',
  };
  await Factory.model('App/Models/Contact').create(contactPayload);

  const response = await client
    .post('/contact')
    .send(contactPayload)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.contact);
});
