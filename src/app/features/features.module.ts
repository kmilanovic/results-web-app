import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    TableComponent,
    FixturesComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    FixturesComponent,
    TableComponent
  ]
})
export class FeaturesModule { }
