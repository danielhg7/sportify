import { IPlayer } from "./player";

export interface ILineup{

    startingLineup: Array<IPlayer>;
    substitutes: Array<IPlayer>;
    coach: Array<IPlayer>;
}