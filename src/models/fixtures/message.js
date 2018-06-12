import { fixture } from 'can';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET http://chat.donejs.com/api/messages': store.getList,
  'GET http://chat.donejs.com/api/messages/{id}': store.get
});

export default store;
