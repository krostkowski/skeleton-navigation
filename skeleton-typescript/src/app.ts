import {Router, RouterConfiguration} from 'aurelia-router';
import * as moment from 'moment';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    console.log('typeof moment', typeof moment);

    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
