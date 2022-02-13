import {Server} from 'socket.io';
let socket = {}

const connect = (server) => {
  socket.io = new Server(server, {cors: {origin: 'http://localhost:3000', methods: ["GET", "POST", "PUT", "DELETE"]}});
}

export default {
  connect,
  socket
} 