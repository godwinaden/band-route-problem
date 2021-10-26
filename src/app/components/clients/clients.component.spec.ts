import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponent } from './clients.component';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let carousel: NgbCarousel;
  let carouselFixture: ComponentFixture<NgbCarousel>;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsComponent, NgbCarousel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    carouselFixture = TestBed.createComponent(NgbCarousel);
    component = fixture.componentInstance;
    carousel = carouselFixture.componentInstance;
    fixture.detectChanges();
    carouselFixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(carousel).toBeTruthy();
  });

  it(`should have clients of at least 6`, () => {  //5
    const fixture = TestBed.createComponent(ClientsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.clients.length).toEqual(6);
  });
});
