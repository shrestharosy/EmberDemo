import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('main-nav');
  this.route('contact');
  this.route('rentals');
  this.route('form');
});

export default Router;
