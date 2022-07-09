// tratar requisições pra devolver
// fazer login, logout
// metodos que dá pra serem utilizados: index, show, update, store, destroy
/*
  index: listagem de sessões
  store: criar uma sessão // criar um usuário?
  show: quando queremos listar uma única sessão
  update: quando queremos alterar alguma sessão
  destroy: quando queremos deletar uma sessão
*/

import User from "../models/User";

class SessionController{
  async store(req, res){
    const { email } = req.body;

    // verificando se o usuário já existe e se existir, logar
    let user = await User.findOne({ email});

    // se ele não existir, criar um usuário
    if(!user){
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
