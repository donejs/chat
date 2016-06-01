import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import DefineMap from "can-define/map/";
import DefineList from "can-define/list/";
import io from 'steal-socket.io';

export const Message = DefineMap.extend({
  seal: false
}, {
  id: "*"
});

Message.List = DefineList.extend({
  "*": Message
});

export const messageConnection = superMap({
  url: 'http://chat.donejs.com/api/messages',
  idProp: 'id',
  Map: Message,
  List: Message.List,
  name: 'message'
});

tag('message-model', messageConnection);

const socket = io('http://chat.donejs.com');

socket.on('messages created',
  message => messageConnection.createInstance(message));
socket.on('messages updated',
  message => messageConnection.updateInstance(message));
socket.on('messages removed',
  message => messageConnection.destroyInstance(message));

export default Message;
