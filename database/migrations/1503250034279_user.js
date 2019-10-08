/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .string('rg')
        .notNullable()
        .unique();
      table
        .string('cpf')
        .notNullable()
        .unique();
      table.date('birthDate').notNullable();
      table.string('sellerCode').unique();
      table
        .string('email')
        .notNullable()
        .unique();
      table.string('password').notNullable();
      table.enu('status', ['1', '2']).default('1');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
