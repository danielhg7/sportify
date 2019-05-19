import { Component, OnInit } from '@angular/core';
import { FootballService } from './../football.service';

@Component({
  selector: 'app-football-live',
  templateUrl: './football-live.component.html',
  styleUrls: ['./football-live.component.css']
})
export class FootballLiveComponent implements OnInit {

  private fixtures = [];
  imageWidth: number = 40;
  imageMargin: number = 2;

  constructor(private footballService: FootballService) { }

  ngOnInit() {

    this.footballService.getFootballLiveFixtures().subscribe(
      fixtures => {
        
        this.fixtures = fixtures;

      }
    );
  }

}
