import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';
import io from 'socket.io-client';

export const Message = can.Map.extend({
  define: {}
});

Message.List = can.List.extend({
  Map: Message
}, {});

export const messageConnection = superMap({
  url: '/api/messages',
  idProp: 'id',
  Map: Message,
  List: Message.List,
  name: 'message'
});

tag('message-model', messageConnection);

export default Message;

if(io) {
  const socket = io();

  socket.on('messages created', order => messageConnection.createInstance(order));
  socket.on('messages updated', order => messageConnection.updateInstance(order));
  socket.on('messages removed', order => messageConnection.destroyInstance(order));
}
