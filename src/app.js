import Map from "can-map";
import route from "can-route";
import "can-route-pushstate";
import 'can-map-define';

const AppViewModel = Map.extend({
  define: {
    title: {
      value: 'donejs-chat',
      serialize: false
    }
  }
});

route('/:page', { page: 'home' });

export default AppViewModel;
