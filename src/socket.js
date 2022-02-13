import {Server} from 'socket.io';
let socket = {}

const connect = (server) => {
  socket.io = new Server(server)
}

export default {
  connect,
  socket
} 