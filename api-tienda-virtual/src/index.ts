import express from 'express';
import dontenv from 'dotenv';
import productsRouter from './routes/products.router';

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json()); // Middleware to parse JSON bodies
    this.environments();
    this.database();
    this.routes();
  }

  private environments() {
    dontenv.config();
    console.log('Environment variables loaded');
  }
  
  private database() {
    // Placeholder for database connection logic
    console.log('Database connected');
  }

  private routes() {
    this.app.use('/v1/products', productsRouter)
  }

}

const application = new App();
export default application.app;
