import express from 'express';
const dotenv = require('../environments/dotenv.js');

class App { 
  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.enviroments();
    this.database();
  }

  private enviroments() {
    new dotenv().config();
  }

  private database() {

  }
}

const application = new App();
export default application.app;