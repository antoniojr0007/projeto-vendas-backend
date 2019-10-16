/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StoreSchema extends Schema {
  up() {
    this.create('stores', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('social_reason');
      table.string('cnpj').notNullable();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('contact_id')
        .unsigned()
        .references('id')
        .inTable('contacts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('address_id')
        .unsigned()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('title').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('stores');
  }
}

module.exports = StoreSchema;
