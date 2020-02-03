import { IMatch } from "./match";

export interface IMatchSet {

    countryName: string;
    leagueName: string;
    matches: Array<IMatch>;
}