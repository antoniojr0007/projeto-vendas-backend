/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Contact = use('App/Models/Contact');

class ContactController {
  async index() {
    const contacts = await Contact.query().fetch();
    return contacts;
  }

  async show({ params }) {
    const contact = await Contact.find(params.id);
    return contact;
  }

  async store({ request, response }) {
    const data = request.only(['name', 'contact', 'type', 'title']);

    const contact = await Contact.create(data);
    return response.status(201).json(contact);
  }

  async update({ params, request }) {
    const contact = await Contact.findOrFail(params.id);
    const data = request.only(['name', 'contact', 'type', 'title']);

    contact.merge(data);
    await contact.save();

    return contact;
  }

  async destroy({ params }) {
    const contact = await Contact.findOrFail(params.id);
    await contact.delete();
  }
}

module.exports = ContactController;
