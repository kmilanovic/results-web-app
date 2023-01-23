import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from "@angular/material/tabs";
import {RouterModule} from "@angular/router";
import {FeaturesModule} from "../features/features.module";



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  exports: [
    MainComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
    FeaturesModule
  ]
})
export class CoreModule { }
