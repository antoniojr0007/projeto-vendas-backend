/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
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
}

module.exports = UserController;
