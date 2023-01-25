import { Component, OnInit } from '@angular/core';
import { MainService } from "../../services/main.service";
import { Competition } from "../../../models/competition.model";
import {Table} from "../../../models/table.model";

const liga1 = "BRA";
const liga2 = "CHA";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  competitions: Competition[] = [];
  public dataFix: string = "";
  constructor(
    private footballDataService: MainService
  ) { }

  ngOnInit(): void {
    this.getCompetitions();
  }

  getCompetitions(): void {
    this.footballDataService.getCompetitions().subscribe(res => {
      // @ts-ignore
      this.competitions = res['competitions'];
    })
  }

  public onCompetitionNameClick(code: string): void {
    if(code === "BSA") {
      this.dataFix = liga1;
    } else if(code === "ELC") this.dataFix = liga2;
    console.log(code);
    // this.imeServise.imemetode(code).subscribe((response) => {
    //   this.dataTable = respose.tableDate;
    //   this.dataFix = response.fix;
    // })
  }

}
