import { Schema, model } from "mongoose";


  // Pra reservar uma casa, será pedido uma data, o id do usuário e o id da casa (assim como consta abaixo)
const ReserveSchema = new Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: 'House'
  },
},
)

export default model('Reserve', ReserveSchema);