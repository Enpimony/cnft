import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import {ProjectComponent} from './pages/project/project.component';
import {SPACEBUDZ_PROJECT} from './constants/projects';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  {
    component: ProjectComponent,
    path: "SpaceBudz",
    data: {
      project: SPACEBUDZ_PROJECT
    }
  },
  {
    component: AboutComponent,
    path: "about"
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
