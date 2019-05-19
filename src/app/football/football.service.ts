import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class FootballService {

    private url : string;
    private key = 'KYrhEacTvXmshtK9b26f5ArwhZoMp1DjknbjsnzX0ypFPxux2L';
    private baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    getAllLeagues(): Observable<any> {

        this.url = 'https://api-football-v1.p.rapidapi.com/v2/leagues';

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('X-RapidAPI-Host', 'api-football-v1.p.rapidapi.com');
        headers = headers.append('X-RapidAPI-Key', this.key);
        
        return this.http.get<any>(this.url, {headers: headers}).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getAllLeaguesFromSeason(): Observable<any> {

        this.url = 'https://api-football-v1.p.rapidapi.com/v2/leagues/season/2018';
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('X-RapidAPI-Host', 'api-football-v1.p.rapidapi.com');
        headers = headers.append('X-RapidAPI-Key', this.key);
        
        return this.http.get<any>(this.url, {headers: headers}).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getFootballLiveFixtures(): Observable<any> {

        this.url = this.baseUrl + 'api/football/live';
        
        return this.http.get<any>(this.url).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getLeagueTeams(): Observable<any> {
        return this.http.get<any>(this.url).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data)))
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }

        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `${err.error.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}