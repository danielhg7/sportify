import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballModule } from './football/football.module';
import { FootballLiveComponent } from './football/football-live/football-live.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BasketballComponent
  ],
  imports: [
    FootballModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'football', component: FootballLiveComponent },
      { path: 'basketball', component: BasketballComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
