import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCertComponent } from './my-cert.component';

describe('MyCertComponent', () => {
  let component: MyCertComponent;
  let fixture: ComponentFixture<MyCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
