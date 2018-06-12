import io from 'steal-socket.io';
import { DefineMap, DefineList, realtimeRestModel } from 'can';

export const Message = DefineMap.extend({
  seal: false
}, {
  id: {
    type: 'any',
    identity: true
  }
});

Message.List = DefineList.extend({
  "#": Message
});

export const messageConnection = realtimeRestModel({
  url: 'http://chat.donejs.com/api/messages',
  idProp: 'id',
  Map: Message,
  List: Message.List,
  name: 'message'
});

const socket = io('http://chat.donejs.com');

socket.on('messages created',
  message => messageConnection.createInstance(message));
socket.on('messages updated',
  message => messageConnection.updateInstance(message));
socket.on('messages removed',
  message => messageConnection.destroyInstance(message));

export default Message;
