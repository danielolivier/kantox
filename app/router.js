import EmberRouter from '@ember/routing/router';
import config from 'kshop-app/config/environment';
import routes from './routes';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route(routes.products);
  this.route(routes.checkout);
});
