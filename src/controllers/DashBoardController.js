import House from '../models/House';

class DashBoardController{
  // Utilizaremos o show para listar as casas que o usuário tem cadastrado

  async show(req, res){
    const { user_id } = req.headers;

    const houses = await House.find({
      user: user_id
    })
    return res.json(houses);
  }

}

export default new DashBoardController();