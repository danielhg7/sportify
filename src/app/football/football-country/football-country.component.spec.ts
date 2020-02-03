import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballCountryComponent } from './football-country.component';

describe('FootballCountryComponent', () => {
  let component: FootballCountryComponent;
  let fixture: ComponentFixture<FootballCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
