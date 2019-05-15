import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="./../assets/images/sports.png">
</div>

<nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{ pageTitle }}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/football']">Football</a></li>
    <li><a class='nav-link' [routerLink]="['/basketball']">Basketball</a></li>
  </ul>
</nav>
<div class='container'>
  <router-outlet></router-outlet>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sportify';
}
