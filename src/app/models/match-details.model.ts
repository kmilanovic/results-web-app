import {Competition} from "./competition.model";
import {Score} from "./score.model";

export interface MatchDetails {
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
  competition: Competition;
  venue: string;
}
