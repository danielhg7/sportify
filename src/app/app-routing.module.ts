import { BasketballComponent } from "./basketball/basketball.component";
import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'basketball', component: BasketballComponent },
      { path: '', redirectTo: 'football', pathMatch: 'full' },
      { path: '**', redirectTo: 'football', pathMatch: 'full' }
    ])
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule { }
