import { Component, Input } from "@angular/core";
import {
  STATUS_IN_PROGRESS,
  STATUS_RELEASED,
  STATUS_TO_RELEASE,
} from "../../constants/projects";

@Component({
  selector: "enp-artist-card",
  templateUrl: "./artist-card.component.html",
  styleUrls: ["./artist-card.component.scss"],
})
export class ArtistCardComponent {
  @Input() artist;

  public STATUS_RELEASED = STATUS_RELEASED;
  public STATUS_IN_PROGRESS = STATUS_IN_PROGRESS;
  public STATUS_TO_RELEASE = STATUS_TO_RELEASE;

  
}
