import http from 'http';
import app from '../index';


class Server{
  constructor() {
    const httpServer = http.createServer(app);
    httpServer.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })

    // http.createServer(app).listen(process.env.PORT, () => {
    //   console.log(`Server is running on port ${process.env.PORT}`);
    // })
  }
}

new Server();