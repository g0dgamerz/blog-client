import Adapter from '@ember-data/adapter';
import $ from 'jquery';

export default class ApplicationAdapter extends Adapter {
  namespace = 'api';
  findAll(store, type) {
    let url = `https://localhost:7083/${this.namespace}/${type.modelName}`;
    // eslint-disable-next-line ember/no-jquery
    return $.get(url);
  }
  findRecord(store, type, id) {
    console.log(id);
    let url = `https://localhost:7083/${this.namespace}/${type.modelName}/${id}`;
    // eslint-disable-next-line ember/no-jquery
    return $.get(url);
  }
  createRecord(store, type, snapshot) {
    //The data is contained within the snapshot argument.
    //snapshot argument is instance of Snapshot which represent
    let data = {};
    // the role of a serializer is to format data sent to and received
    // from the server. Instead of formatting the snapshot data in the adapter,
    // which we could do, we should do this in the serializer. To get access to our
    // model’s serializer, we can call the serializerFor() method on the store,
    // giving it the model name. Next, serializers have a serializeIntoHash()
    // method that can be called to format the request payload data. In this case,
    // we are using serializeIntoHash() to build the data variable, which is
    // modified by reference. Thetype and snapshot arguments
    // are also passed along. This data variable
    // becomes our stringified JSON payload.
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    // eslint-disable-next-line ember/no-jquery
    return $.ajax({
      type: 'POST',
      url: `https://localhost:7083/${this.namespace}/${type.modelName}`,
      data: JSON.stringify(data.blog),
      contentType: 'application/json',
    });
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

  //to make this request we can call destoryrecord() on our model
  //calling destroyRecord() on the model maps to deleteRecord() on the adapter
  deleteRecord(store, type, snapshot) {
    // eslint-disable-next-line ember/no-jquery
    return $.ajax({
      type: 'DELETE',
      url: `https://localhost:7083/${this.namespace}/${type.modelName}?id=${snapshot.id}`,
    });
  }

  updateRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    console.log(data.blog);
    // eslint-disable-next-line ember/no-jquery
    return $.ajax({
      type: 'PUT',
      url: `https://localhost:7083/${this.namespace}/${type.modelName}/${snapshot.id}`,
      data: JSON.stringify(data.blog),
      contentType: 'application/json',
    });
  }
}
