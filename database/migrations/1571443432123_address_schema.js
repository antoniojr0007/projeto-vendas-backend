/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressSchema extends Schema {
  up() {
    this.create('addresses', table => {
      table.increments();
      table.string('title');
      table.string('zip_code').notNullable();
      table.string('street').notNullable();
      table.string('number').notNullable();
      table.string('complement');
      table.string('district').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('country').notNullable();
      table.string('type').notNullable();
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
    this.drop('addresses');
  }
}

module.exports = AddressSchema;
