import { Component, OnInit } from '@angular/core';
import { FootballService } from './football.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  private leagues = [];
  imageWidth: number = 40;
  imageMargin: number = 2;

  constructor(private footballService: FootballService) { }

  ngOnInit() {

    this.footballService.getAllLeaguesFromSeason().subscribe(
      leagues => {
        
        this.leagues = leagues.api.leagues;

      }
    );
  }

}
