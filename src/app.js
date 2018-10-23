import { DefineMap, route } from 'can';
import RoutePushstate from 'can-route-pushstate';
import 'can-debug#?./is-dev';

const AppViewModel = DefineMap.extend({
  env: {
    default: () => ({NODE_ENV:'development'})
  },
  title: {
    default: 'donejs-chat'
  },
  routeData: {
    default: () => route.data
  },
  pageComponentModuleName: {
    get() {
      switch (this.routeData.page) {
        case 'chat': return '~/messages/';
        default: return '~/home.component';
      }
    }
  },
  pageComponent: {
    get() {
      return steal.import(this.pageComponentModuleName)
      .then(({default: Component}) => {
        return new Component();
      });
    }
  }
});

route.urlData = new RoutePushstate();
route.register('{page}', { page: 'home' });
route.start();

export default AppViewModel;
