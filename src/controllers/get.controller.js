import socket  from '../socket';
let socketServer = socket.socket

const sendMessage = () => {
  socketServer.io.on('message1', (data) => {
    console.log('data');
  })
  socketServer.io.emit('message', 'HOLA')
  return { message: 'HOLA' }
}

export default sendMessage