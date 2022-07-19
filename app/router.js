import EmberRouter from '@ember/routing/router';
import config from 'blog-client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  //we can add path with dynamic section as below
  this.route('blog', { path: '/blog/:id' });
  this.route('create', { path: '/post/new' });
  this.route('edit', { path: '/post/:id/edit' });
});
