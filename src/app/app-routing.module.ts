import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";
import {
  CARDANOBITS_PROJECT,
  FINGERMONSTERS_PROJECT,
  SPACEBUDZ_PROJECT,
} from "./constants/projects";
import { NewsPageComponent } from "./pages/news-page/news-page.component";
import { ArtistComponent } from "./pages/artist/artist.component";

const routes: Routes = [
  {
    component: NewsPageComponent,
    path: "",
  },
  {
    component: HomeComponent,
    path: "projects",
  },
  {
    component: ArtistComponent,
    path: "artists",
  },
  {
    component: ProjectComponent,
    path: "SpaceBudz",
    data: {
      project: SPACEBUDZ_PROJECT,
    },
  },
  {
    component: ProjectComponent,
    path: "FingerMonsters",
    data: {
      project: FINGERMONSTERS_PROJECT,
    },
  },
  {
    component: ProjectComponent,
    path: "CardanoBits",
    data: {
      project: CARDANOBITS_PROJECT,
    },
  },
  {
    component: AboutComponent,
    path: "about",
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
