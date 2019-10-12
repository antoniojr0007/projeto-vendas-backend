/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', (faker, i, data = {}) => {
  return {
    name: faker.name(),
    email: faker.email(),
    // O numero do rg esta sendo representado pelo número de seguro social fiquiticio.
    rg: faker.ssn(),
    cpf: faker.cpf(),
    birthDate: faker.birthday({ string: true }),
    // O codigo de vendedor esta sendo representado pelo Google Analytics fiquiticio.
    sellerCode: faker.google_analytics(),
    password: faker.string(),
    ...data,
  };
});

Factory.blueprint('App/Models/Token', (faker, i, data = {}) => {
  return {
    type: data.type || 'refreshtoken',
    token: faker.string({ length: 20 }),
    ...data,
  };
});
