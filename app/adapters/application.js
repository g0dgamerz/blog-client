import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  host = 'https://localhost:7083';
  //without serializer following error come in console
  // index.js:181 Uncaught (in promise)
  // Error: Assertion Failed:
  // No serializer was found for 'blog' and no 'application'
  // serializer was found as a fallback
}
