import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {
  private rootUrl = environment.url;
  private apiKey = environment.apiKey;
  constructor(
    private http: HttpClient
  ) { }

  getCompetitions(){
    const params = new HttpParams()
      .set('plan', 'TIER_ONE')
    return this.http.get(`${this.rootUrl}/competitions/`,
      {
        headers: {"X-Auth-Token": this.apiKey},
        params
      })
  }
}
