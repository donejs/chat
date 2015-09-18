import AppMap from 'can-ssr/app-map';
import route from 'can/route/';
import './utils';
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = AppMap.extend({
  define: {
    title: {
      value: 'donejs-chat',
      serialize: false
    },
    page: {
      value: ''
    }
  }
});

route('/:page', { page: 'home' });

export default AppViewModel;
