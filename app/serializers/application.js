import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  //normlize is the process to get desire data from server to client
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { blog: payload };
    console.log(payload);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
