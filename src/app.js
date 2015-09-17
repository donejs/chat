import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';

import "can/route/pushstate/";

const AppViewModel = AppMap.extend({
  define: {
    title: {
      value: 'donejs-chat',
      serialize: false
    },
    username: {
      value: ''
    },
    page: {
      value: ''
    }
  }
});

route('/:username/:page', { page: 'login', username: '' });

export default AppViewModel;
