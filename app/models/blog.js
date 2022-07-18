import Model, { attr } from '@ember-data/model';

export default class BlogModel extends Model {
  @attr('string') title;
  @attr('string') body;
}
