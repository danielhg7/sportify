import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballModule } from './football/football.module';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
