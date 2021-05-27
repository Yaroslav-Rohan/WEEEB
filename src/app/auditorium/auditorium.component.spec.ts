import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { AuditoriumComponent } from './auditorium.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuditoriumComponent', () => {
  let component: AuditoriumComponent;
  let fixture: ComponentFixture<AuditoriumComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriumComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create auditorium', () => {
    let name: object = {
      value: '113A'
    },
      description: object = {
      value: 'New'
      }
      component.createauditorium(name, description);
    expect(component).toBeDefined();
  });

  it('should logout', () => {
    component.logout();
    expect(component).toBeDefined();
  })
});
