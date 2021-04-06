import {Component} from '@angular/core';
import {PROJECT_LIST} from '../../constants/projects';

@Component({
  selector: 'enp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public projectList = PROJECT_LIST;

}
