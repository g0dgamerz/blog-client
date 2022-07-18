import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action deletePost(blog) {
    let confirmed = window.confirm(
      'Are you sure you wnat to delete this blog?'
    );
    if (confirmed) {
      blog.destroyRecord();
    }
  }
}
