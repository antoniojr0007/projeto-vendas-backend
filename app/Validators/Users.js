class Users {
  get rules() {
    return {
      nome: 'required',
      rg: 'required|unique:users,rg',
      cpf: 'required|unique:users,cpf',
      birthDate: 'required',
      sellerCode: 'required|unique:users,sellerCode',
      email: 'email|required|unique:users,email',
      password: 'required',
    };
  }
}

module.exports = Users;
