import { Component, OnInit } from '@angular/core';
import {MainService} from "../../../core/services/main.service";
import {Table} from "../../../models/table.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tableData!: Table[];
  public leagueCode!: string ;
  public dataSource!: MatTableDataSource<Table>;
  displayedColumns: string[] = ['position', 'team.crest', 'team.name', 'playedGames'];

  constructor( private footballDataService: MainService) { }

  ngOnInit(): void {
    this.getStandings();
  }


  public getStandings(): void {
    this.footballDataService.getStandings().subscribe(res =>{
      // @ts-ignore
      this.tableData = res["standings"][0].table;
      this.dataSource = new MatTableDataSource(this.tableData);
      console.log(this.tableData)
    })
  }

}
