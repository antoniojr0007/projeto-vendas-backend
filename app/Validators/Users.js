class Users {
  get rules() {
    return {
      name: 'required',
      rg: 'required|unique:users,rg',
      cpf: 'required|unique:users,cpf',
      birthDate: 'required',
      sellerCode: 'required|unique:users,sellerCode',
      email: 'required|unique:users,email',
      password: 'required',
    };
  }
}

module.exports = Users;
