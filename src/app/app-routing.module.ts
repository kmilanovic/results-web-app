import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./core/main/main.component";
import {LeagueComponent} from "./features/league/league.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':competitionName', component: LeagueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
