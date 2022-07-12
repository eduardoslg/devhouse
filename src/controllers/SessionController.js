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
import * as Yup from 'yup';

class SessionController{
  async store(req, res){

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    })

    const { email } = req.body;

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: "Falha na validação. Email incorreto." });
    }

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
