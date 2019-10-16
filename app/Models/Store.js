/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Store extends Model {
  contact() {
    return this.hasMany('App/Models/Contact');
  }

  address() {
    return this.hasMany('App/Models/Address');
  }
}

module.exports = Store;
