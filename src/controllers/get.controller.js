import socket  from '../socket';
let socketServer = socket.socket

const sendMessage = () => {
  socketServer.io.emit('message', 'HOLA')
  return { message: 'HOLA' }
}

export default sendMessage