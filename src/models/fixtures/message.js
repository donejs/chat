import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET http://chat.donejs.com/api/messages': store.findAll,
  'GET http://chat.donejs.com/api/messages/{id}': store.findOne,
  'POST http://chat.donejs.com/api/messages': store.create,
  'PUT http://chat.donejs.com/api/messages/{id}': store.update,
  'DELETE http://chat.donejs.com/api/messages/{id}': store.destroy
});

export default store;
