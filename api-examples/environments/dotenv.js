const dotenv = require('dotenv');
const path = require('path');

module.exports = class Dotenv { 
  
  config() {
    console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
    dotenv.config({
      path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
    });
  }
}