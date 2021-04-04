import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public STATUS_RELEASED = 'RELEASED';
  public STATUS_ANNOUNCED = 'ANNOUNCED';
  public STATUS_TO_RELEASE = 'TO_RELEASE';

  public SPACEBUDZ_PROJECT = {
    name: 'SpaceBudz',
    twitter: 'spacebudzNFT', // add @ before text and https://twitter.com/ before href
    discord: 'https://discord.com/invite/ePJZBVwQNq',
    telegram: 'https://t.me/spacebudz',
    webpage: 'https://spacebudz.io/',
    mintedToken: '',
    dateRelease: '',
    status: this.STATUS_RELEASED,
  };

  public CARDANOBITS_PROJECT = {
    name: 'CardanoBits',
    twitter: 'CardanoBits', // add @ before text and https://twitter.com/ before href
    discord: '',
    telegram: '',
    webpage: 'https://cardanobits.art/',
    mintedToken: '',
    dateRelease: '',
    status: this.STATUS_TO_RELEASE,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
