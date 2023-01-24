import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LeagueComponent } from './components/league/league.component';



@NgModule({
  declarations: [
    TableComponent,
    FixturesComponent,
    LeagueComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FixturesComponent
  ]
})
export class FeaturesModule { }
