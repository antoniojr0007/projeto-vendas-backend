/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Store = use('App/Models/Store');
/**
 * Resourceful controller for interacting with stores
 */
class StoreController {
  async index() {
    const stores = await Store.query().fetch();
    return stores;
  }

  async show({ params }) {
    const store = await Store.find(params.id);
    return store;
  }

  async store({ request, response }) {
    const data = request.only([
      'name',
      'social_reason',
      'cnpj',
      'contact_id',
      'address_id',
      'user_id',
      'title',
    ]);

    const store = await Store.create(data);
    return response.status(201).json(store);
  }

  async update({ params, request }) {
    const store = await Store.findOrFail(params.id);
    const data = request.only([
      'name',
      'social_reason',
      'cnpj',
      'contact_id',
      'address_id',
      'user_id',
      'title',
    ]);

    store.merge(data);
    await store.save();

    return store;
  }

  async destroy({ params }) {
    const store = await Store.findOrFail(params.id);
    await store.delete();
  }
}

module.exports = StoreController;
