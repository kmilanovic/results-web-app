import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  @Input() sTx: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
