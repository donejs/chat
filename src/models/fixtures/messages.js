import { fixture } from 'can';
import Message from '../message';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}], Message.connection.algebra);

fixture('/api/messages/{id}', store);

export default store;
