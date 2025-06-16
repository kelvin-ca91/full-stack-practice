import http from 'http';
import app from '../index'

class Www {
  constructor() {
    console.log('Starting server...',process.env.PORT);
    const PORT = process.env.PORT;
    const httpServer = http.createServer(app)

    httpServer.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

new Www();
