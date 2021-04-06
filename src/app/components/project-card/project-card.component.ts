import {Component, Input} from '@angular/core';
import {STATUS_IN_PROGRESS, STATUS_RELEASED, STATUS_TO_RELEASE} from '../../constants/projects';

@Component({
  selector: 'enp-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project;

  public STATUS_RELEASED = STATUS_RELEASED;
  public STATUS_IN_PROGRESS = STATUS_IN_PROGRESS;
  public STATUS_TO_RELEASE = STATUS_TO_RELEASE;

}
