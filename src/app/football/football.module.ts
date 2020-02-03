import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FootballComponent } from './football.component';
import { FootballLiveComponent } from './football-live/football-live.component';
import { FootballHomeComponent } from './football-home/football-home.component';
import { FootballCountryComponent } from './football-country/football-country.component';

@NgModule({
  declarations: [
    FootballComponent,
    FootballLiveComponent,
    FootballHomeComponent,
    FootballCountryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
        { path: 'football', 
          component: FootballComponent,
          children : [
            {
              path: '',
              redirectTo: 'home',
              pathMatch: 'full'
            },
            {
              path: 'home',
              component: FootballHomeComponent
            },
            {
              path: 'live',
              component: FootballLiveComponent
            },
            {
              path: ':id',
              component: FootballCountryComponent
            }
          ]
        }
      ])
  ],
  exports: [
    FootballComponent
  ]
})

export class FootballModule { }
