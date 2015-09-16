import fixture from 'can-connect/fixture/';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/messages': store.findAll,
  'GET /api/messages/{id}': store.findOne,
  'POST /api/messages': store.create,
  'PUT /api/messages/{id}': store.update,
  'DELETE /api/messages/{id}': store.destroy
});

export default store;

