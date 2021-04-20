import { Component, OnInit } from "@angular/core";
import { ARTIST_LIST } from "src/app/constants/artists";

@Component({
  selector: "enp-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"],
})
export class ArtistComponent implements OnInit {
  public artistList = ARTIST_LIST;

  constructor() {}

  ngOnInit(): void {
    console.log(this.artistList);
  }
}
