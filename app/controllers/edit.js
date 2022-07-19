import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditController extends Controller {
  @service store;
  @service router;
  @action editPost(event) {
    event.preventDefault();
    //console.log(this.model);
    // let blog = {
    //   id: this.model.id,
    //   title: this.model.title,
    //   body: this.model.body,
    // };
    let blog = this.model;
    blog.save().then(() => {
      this.router.transitionTo('index');
    });
  }
}
