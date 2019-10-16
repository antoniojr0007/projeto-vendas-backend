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
    role: faker.integer({ min: 1, max: 4 }),
    status: faker.integer({ min: 1, max: 2 }),
    ...data,
  };
});

Factory.blueprint('App/Models/Store', (faker, i, data = {}) => {
  return {
    name: faker.name(),
    social_reason: faker.name(),
    cnpj: faker.cpf(),
    user_id: faker.integer({ min: 1, max: 4 }),
    contact_id: faker.integer({ min: 1, max: 4 }),
    address_id: faker.integer({ min: 1, max: 4 }),
    title: faker.name(),
    ...data,
  };
});

Factory.blueprint('App/Models/Contact', (faker, i, data = {}) => {
  return {
    name: faker.name(),
    contact: faker.phone({ formatted: false }),
    type: faker.name(),
    title: faker.name(),
    ...data,
  };
});

Factory.blueprint('App/Models/Address', (faker, i, data = {}) => {
  return {
    title: faker.name(),
    zip_code: faker.zip(),
    street: faker.street(),
    number: faker.integer({ min: 1, max: 999 }),
    complement: faker.name(),
    district: faker.province(),
    city: faker.city(),
    state: faker.locale(),
    country: faker.country(),
    type: faker.name(),
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
