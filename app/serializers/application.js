import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
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
