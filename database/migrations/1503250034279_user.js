/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('avatar');
      table
        .string('rg')
        .unique()
        .notNullable();
      table
        .string('cpf')
        .unique()
        .notNullable();
      table.date('birthDate').notNullable();
      table
        .string('sellerCode')
        .unique()
        .notNullable();
      table
        .string('email')
        .notNullable()
        .unique();
      table.string('password').notNullable();
      // Roles '0 = Administrador', '1 = Supervisor', '2 = Vendedor Lider', '3 = Vendedor'
      table.enu('role', ['1', '2', '3', '4']).default('3');
      // Status '0 = Bloqueado','1 = Ativo'
      table.enu('status', ['1', '2']).default('2');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
