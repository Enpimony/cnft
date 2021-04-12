import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {PROJECTS} from '../../constants/news';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'enp-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsList;

  constructor(
    private firestore: AngularFirestore,
  ) {
    this.newsList = firestore.collection('news', ref => ref.orderBy('date', 'desc')).valueChanges().pipe(
      map((newsList: any[]) => {
        return newsList.map((newsElem: any) => {
          newsElem.date = new Timestamp(newsElem.date.seconds, newsElem.date.nanoseconds).toDate();
          newsElem.project = PROJECTS[newsElem.project];
          return newsElem;
        });
      })
    );

  }

  ngOnInit(): void {
  }

}
