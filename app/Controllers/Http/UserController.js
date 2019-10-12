/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
  async index() {
    const users = await User.query().fetch();
    return users;
  }

  async show({ params }) {
    const user = await User.find(params.id);
    return user;
  }

  async store({ request, response }) {
    const data = request.only([
      'name',
      'rg',
      'cpf',
      'birthDate',
      'sellerCode',
      'email',
      'password',
      'role',
      'status',
    ]);

    const user = await User.create(data);
    return response.status(201).json(user);
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const data = request.only([
      'name',
      'rg',
      'cpf',
      'birthDate',
      'sellerCode',
      'email',
      'role',
      'status',
    ]);

    user.merge(data);
    await user.save();

    return user;
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }
}
module.exports = UserController;
