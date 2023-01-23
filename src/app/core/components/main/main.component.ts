import { Component, OnInit } from '@angular/core';
import { MainService } from "../../services/main.service";
import { Competition } from "../../../models/competition.model";

const liga1 = "BRA";
const liga2 = "CHA";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public competitions!: Competition[];
  public dataFix: string = "";
  constructor(
    private footballDataService: MainService
  ) { }

  ngOnInit(): void {
    this.getCompetitions();
  }

  public getCompetitions(): void {
    this.footballDataService.getCompetitions().subscribe(data => {
      // @ts-ignore
      this.competitions = data["competitions"];
    })
  }

  public onCompetitionNameClick(code: string): void {
    if(code === "BSA") {
      this.dataFix = liga1;
    } else this.dataFix = liga2;
    console.log(code);
    // this.imeServise.imemetode(code).subscribe((response) => {
    //   this.dataTable = respose.tableDate;
    //   this.dataFix = response.fix;
    // })
  }

}
