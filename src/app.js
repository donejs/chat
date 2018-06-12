import { DefineMap } from 'can';
import route from 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  route: 'string',
  page: 'string',
  title: {
    default: 'donejs-chat',
    serialize: false
  }
});

route.register('{page}', { page: 'home' });
route.start();

export default AppViewModel;
