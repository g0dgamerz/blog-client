import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateController extends Controller {
  @service store;
  @action createBlog(event) {
    event.preventDefault();
    console.log(this.title, this.body);
    let blog = this.store.createRecord('blog', {
      title: this.title,
      body: this.body,
    });
    // To save the record, save() needs to be
    //called on the record to persist those changes via a POST /api/blog
    // request,
    blog.save().then(() => {
      this.transitionToRoute('index');
    });
  }
}
