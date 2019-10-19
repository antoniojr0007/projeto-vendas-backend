/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ContactSchema extends Schema {
  up() {
    this.create('contacts', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('contact').notNullable();
      table.string('type').notNullable();
      table.string('title');
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('store_id')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('contacts');
  }
}

module.exports = ContactSchema;
