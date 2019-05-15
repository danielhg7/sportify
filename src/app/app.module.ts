import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballComponent } from './football/football.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FootballComponent,
    BasketballComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'football', component: FootballComponent },
      { path: 'basketball', component: BasketballComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
