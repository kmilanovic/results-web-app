import {Score} from "./score.model";

export interface Match {
  awayTeam: object;
  group: string;
  homeTeam: object;
  id: number;
  lastUpdated: string;
  matchday: number;
  odds: object;
  referees: object[];
  score: Score;
  season: object;
  stage: string;
  status: string;
  utcDate: string;
}
