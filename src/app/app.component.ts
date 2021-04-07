import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {googleAnalytics} from '../assets/analytics';

@Component({
  selector: 'enp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
  ) {
    this.initAnalytics();
  }

  initAnalytics(): void {
    if (environment.analyticsCode) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((event: any) => {
        const url = event.url;
        if (url !== null && url !== undefined && url !== '' && url.indexOf('null') < 0) {
          googleAnalytics(url);
        }
      });
    }
  }
}
