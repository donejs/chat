import AppMap from 'can-ssr/app-map';
import route from 'can/route/';
import platform from 'steal-platform';
import 'can/map/define/';
import 'can/route/pushstate/';
import './utils';

if(platform.isCordova || platform.isNW) {
  route.defaultBinding = 'hashchange';
}

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
