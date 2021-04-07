import { Component, OnInit } from "@angular/core";

@Component({
  selector: "enp-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public openedModal = false;
  public isMenuOpened = false;
  constructor() {}

  ngOnInit(): void {}

  public openModal() {
    this.openedModal = true;
  }

  public closeModal() {
    this.openedModal = false;
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
