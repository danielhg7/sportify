import { ILeague } from "./league";

export interface ICountry {

    id: number;
    name: string;
    leagues: Array<ILeague>;
}
    