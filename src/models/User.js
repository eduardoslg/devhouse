import { Schema, model } from "mongoose";


// para cadastrar um novo usuário, é apenas necessário informar um email
const UserSchema = new Schema({
  email: String,
});

export default model('User', UserSchema);