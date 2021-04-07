import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {STATUS_IN_PROGRESS, STATUS_RELEASED, STATUS_TO_RELEASE} from '../../constants/projects';


@Component({
  selector: 'enp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public STATUS_RELEASED = STATUS_RELEASED;
  public STATUS_IN_PROGRESS = STATUS_IN_PROGRESS;
  public STATUS_TO_RELEASE = STATUS_TO_RELEASE;
  public project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.project = this.route.snapshot.data.project;
  }

}
