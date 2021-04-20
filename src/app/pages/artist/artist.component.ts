import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enp-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public projectList = [];

  constructor() { }

  ngOnInit(): void {
  }

}
