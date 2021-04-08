import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/constants/news';

@Component({
  selector: 'enp-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsList = NEWS;

  constructor() { }

  ngOnInit(): void {
  }

}
