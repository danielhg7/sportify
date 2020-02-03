import { ICountry } from "./country";
import { ILeague } from "./league";
import { ITeamScore } from "./teamScore";
import { IGoalScorer } from "./goalScorer";
import { ICard } from "./card";
import { ILineup } from "./lineup";
import { IStatistic } from "./statistic";

export interface IMatch {

    id: number;
    country: ICountry;
    league: ILeague;
    date: string;
    status: number;
    time: string;
    hometeamName: string;
    hometeamScore: string;
    awayteamName: string;
    awayteamScore: string;
    homeScore: ITeamScore;
    awayScore: ITeamScore;
    hometeamSystem: string;
    awayteamSystem: string;
    goalscorers: Array<IGoalScorer>;
    cards: Array<ICard>;
    homeLineup: ILineup;
    awayLineup: ILineup;
    statistics: Array<IStatistic>;

}