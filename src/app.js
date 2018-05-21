import { DefineMap, route } from 'can';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  route: 'string',
  page: 'string',
  title: {
    default: 'donejs-chat',
    serialize: false
  }
});

route.register('/{page}', { page: 'home' });
route.start();

export default AppViewModel;
