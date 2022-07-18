import Adapter from '@ember-data/adapter';
import $ from 'jquery';

export default class ApplicationAdapter extends Adapter {
  namespace = 'api';
  findAll(store, type) {
    let url = `https://localhost:7083/${this.namespace}/${type.modelName}`;
    // eslint-disable-next-line ember/no-jquery
    return $.get(url);
  }
  // namespace = 'api';
  // host = 'https://localhost:7083';
  // pathForType(blog) {
  //   return blog;
  // }
  //   export default class BlogAdapter extends ApplicationAdapter
  // {
  //  pathForType(modelName) {
  //  return modelName;
  //  }
  // }
  // what if our API’s URL used the singular form of the resource instead of the
  //  plural, such as /blog/1 instead of /blogs/1? If all of our contact
  //  endpoints followed this singular convention, we could override the
  //  pathForType() method on a contact adapter:
  //without serializer following error come in console
  // index.js:181 Uncaught (in promise)
  // Error: Assertion Failed:
  // No serializer was found for 'blog' and no 'application'
  // serializer was found as a fallback
}
