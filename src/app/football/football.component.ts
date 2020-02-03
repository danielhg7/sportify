import { Component, OnInit } from '@angular/core';
import { FootballService } from './football.service';
import { ICountry } from './model/country';
import { Router } from '@angular/router';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  private countries : Array<ICountry> = [];

  constructor(private footballService: FootballService, private router: Router) {}

  ngOnInit() {

    this.footballService.getAllCountries().subscribe(
      countries => {
        
        this.countries = countries;

      }
    );
  }

  selectTab(event: any) {

    var selected = document.getElementsByClassName("selected")[0];

    if(selected !== undefined){
      selected.className = "";
    }
    
    event.target.className = "selected";
  }

  linkRoute(country: ICountry){

    if(country.name === "home" || country.name === "live"){
      this.router.navigate(['/football', country.name]);
    }

    else{
      this.router.navigate(['/football', country.id]);
    }
    
  }
}
