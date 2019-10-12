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
      table
        .string('sellerCode')
        .notNullable()
        .unique();
      table
        .string('email')
        .notNullable()
        .unique();
      table.string('password').notNullable();
      // Roles '0 = Administrador', '1 = Supervisor', '2 = Vendedor Lider', '3 = Vendedor'
      table.enu('role', ['0', '1', '2', '3']).default('3');
      // Status '1 = Ativo', '2 = Bloqueado'
      table.enu('status', ['1', '2']).default('1');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
