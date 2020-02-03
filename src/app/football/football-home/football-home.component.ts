import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { IMatchSet } from '../model/matchSet';
import { IMatch } from '../model/match';

@Component({
  selector: 'app-football-home',
  templateUrl: './football-home.component.html',
  styleUrls: ['./football-home.component.css']
})
export class FootballHomeComponent implements OnInit {

  private matchSets : Array<IMatchSet> = [];
  imageWidth: number = 40;
  imageMargin: number = 2;
  formattedDate: string;
  inactiveMatchArray: Array<string> = [
    'FT',
    'HT',
    'AP',
    'Postp.',
    'Canc.',
    'AET',
    'AAW'
  ]

  constructor(private footballService: FootballService) { }

  ngOnInit() {

    var date = new Date();

    var month = date.getMonth() + 1;
    var charMonth = '0' + month;

    this.formattedDate = date.getFullYear() + '-' + charMonth + '-' + date.getDate();
    
    document.getElementById('dateSelector').nodeValue = this.formattedDate;

    this.footballService.getFootballFixturesByDate(this.formattedDate).subscribe(
      matchSets => {
        
        this.matchSets = matchSets;

        this.matchSets.forEach(matchSet => {
          
          //matchSet.matches.push(matchSet[0]);

          matchSet.leagueName = matchSet.matches[0].league.name;
          matchSet.countryName = matchSet.matches[0].country.name;

          matchSet.matches.forEach(match => {
            
            if(match.hometeamScore == ""){
              match.hometeamScore = "?";
              match.awayteamScore = "?";
            }
          });
          
        });

        document.getElementById('dateSelector').style.visibility = 'visible';
      }
    );
  }

  selectDate(event: any){

    console.log(this.formattedDate);
    
    this.footballService.getFootballFixturesByDate(event.target.value).subscribe(
      matchSets => {
        
        this.matchSets = matchSets;

        this.matchSets.forEach(matchSet => {
          
          //matchSet.matches.push(matchSet[0]);

          matchSet.leagueName = matchSet.matches[0].league.name;
          matchSet.countryName = matchSet.matches[0].country.name;

          matchSet.matches.forEach(match => {
            
            if(match.hometeamScore == ""){
              match.hometeamScore = "?";
              match.awayteamScore = "?";
            }
          });
          
        });
      }
    );
  }

  getMatch(match: IMatch){
    console.log(JSON.stringify(match));
  }

}
