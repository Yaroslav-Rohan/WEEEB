import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { AuditoriumsComponent } from './auditoriums.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuditoriumsComponent', () => {
  let component: AuditoriumsComponent;
  let fixture: ComponentFixture<AuditoriumsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriumsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return list of auditoriums', () =>{
    let lists = component.showAuditoriums()
    expect(lists).toBeUndefined();
  });

  it('should logout', () => {
    component.logout();
    expect(component).toBeDefined();
  });
});
