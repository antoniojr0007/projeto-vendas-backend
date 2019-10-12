// const { rule } = use('Validator');
const Antl = use('Antl');
class Users {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required',
      rg: 'required|unique:users',
      cpf: 'required|unique:users',
      birthDate: 'required',
      sellerCode: 'required|unique:users',
      email: 'required|unique:users',
      password: 'required',
      // name: [rule('required')],
      // rg: [rule('required'), rule('exists', ['users', 'rg'])],
      // cpf: [rule('required'), rule('exists', ['users', 'cpf'])],
      // birthDate: [rule('required')],
      // sellerCode: [rule('required'), rule('exists', ['users', 'sellerCode'])],
      // email: [rule('required'), rule('exists', ['users', 'id'])],
      // password: [rule('required')],
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Users;
