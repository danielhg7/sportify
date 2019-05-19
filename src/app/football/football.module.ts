import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FootballComponent } from './football.component';
import { FootballLiveComponent } from './football-live/football-live.component';

@NgModule({
  declarations: [
    FootballComponent,
    FootballLiveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FootballComponent,
    FootballLiveComponent
  ]
})

export class FootballModule { }
