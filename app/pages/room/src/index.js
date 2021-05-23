import SocketBuilder from '../../_shared/socketBuilder.js';
import { constants } from '../../_shared/constants.js';

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected!', user))
  .setOnUserDisconnected((user) => console.log('user disconnected!', user))
  .build()

const room = {
  id: Date.now(),
  topic: 'JS Expert'
}

const user = {
  img: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png',
  username: 'Victor Fuly'
}

socket.emit(constants.events.JOIN_ROOM, { user, room })