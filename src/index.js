import express from 'express';
const app = express();
import { Server } from 'http';
const server = Server(app);
import socket from './socket';
import routes from './routes';

let PORT = process.env.PORT || 5000;

app.use(routes)
socket.connect(server);

server.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
})