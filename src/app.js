import express from 'express';
import routes from './routes';
import path from 'path';
import mongoose from 'mongoose';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://eduardoslg:duh041097@cluster0.ncfa8.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){
    
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());

  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;
