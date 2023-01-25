import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private rootUrl = environment.url;
  private apiKey = environment.apiKey;

  private params = new HttpParams().set('plan', 'TIER_ONE');
  private headers = new HttpHeaders().set('X-Auth-Token', this.apiKey);

  constructor(
    private http: HttpClient
  ) { }

  leagueId!: number;

  getCompetitions() {
    return this.http.get(`${this.rootUrl}/competitions/`,
        {'headers': this.headers,
        'params': this.params})
  }

  getStandings() {
    return this.http.get(`${this.rootUrl}/competitions/PL/standings?standingType=TOTAL`,
      {'headers': this.headers,
        'params': this.params})
  }
}
