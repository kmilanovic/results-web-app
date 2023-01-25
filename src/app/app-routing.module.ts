import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./core/components/main/main.component";
import {TableComponent} from "./features/components/table/table.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':league/:id', component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
