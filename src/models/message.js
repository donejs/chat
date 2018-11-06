import { DefineMap, DefineList, superModel } from 'can';
import loader from '@loader';
import io from 'steal-socket.io';

const Message = DefineMap.extend({
  seal: false
}, {
  'id': {
    type: 'any',
    identity: true
  },
  name: 'string',
  body: 'string'
});

Message.List = DefineList.extend({
  '#': Message
});

Message.connection = superModel({
  url: 'http://chat.donejs.com/api/messages',
  Map: Message,
  List: Message.List,
  name: 'message'
});

const socket = io(loader.serviceBaseURL);

socket.on('messages created',
  message => Message.connection.createInstance(message));
socket.on('messages updated',
  message => Message.connection.updateInstance(message));
socket.on('messages removed',
  message => Message.connection.destroyInstance(message));

export default Message;
