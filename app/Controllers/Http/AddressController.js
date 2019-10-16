/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Address = use('App/Models/Address');

class AddressController {
  async index() {
    const addresses = await Address.query().fetch();
    return addresses;
  }

  async show({ params }) {
    const address = await Address.find(params.id);
    return address;
  }

  async store({ request, response }) {
    const data = request.only([
      'title',
      'zip_code',
      'street',
      'number',
      'complement',
      'district',
      'city',
      'state',
      'country',
      'type',
    ]);

    const address = await Address.create(data);
    return response.status(201).json(address);
  }

  async update({ params, request }) {
    const address = await Address.findOrFail(params.id);
    const data = request.only([
      'title',
      'zip_code',
      'street',
      'number',
      'complement',
      'district',
      'city',
      'state',
      'country',
      'type',
    ]);

    address.merge(data);
    await address.save();

    return address;
  }

  async destroy({ params }) {
    const address = await Address.findOrFail(params.id);
    await address.delete();
  }
}

module.exports = AddressController;
