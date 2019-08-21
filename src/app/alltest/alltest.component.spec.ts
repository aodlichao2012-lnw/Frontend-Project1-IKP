import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltestComponent } from './alltest.component';

describe('AlltestComponent', () => {
  let component: AlltestComponent;
  let fixture: ComponentFixture<AlltestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
