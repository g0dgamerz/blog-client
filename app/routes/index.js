import Route from '@ember/routing/route';
//previous before ember 3.6 service was available in route
// but now as of v4 it's removed and apparently they
//haven't updated the documentation.
import { inject as service } from '@ember/service';

//import $ from 'jquery';

export default class IndexRoute extends Route {
  @service store;
  model() {
    // eslint-disable-next-line ember/no-jquery
    //console.log($.getJSON('https://localhost:7083/api/Blog'));
    return this.store.findAll('blog');
    // eslint-disable-next-line ember/no-jquery
    // $.get('https://localhost:7083/api/Blog');
    // eslint-disable-next-line ember/no-jquery
    // console.log('test');
  }
}
