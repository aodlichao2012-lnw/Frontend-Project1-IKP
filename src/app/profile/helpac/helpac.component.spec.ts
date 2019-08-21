import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpacComponent } from './helpac.component';

describe('HelpacComponent', () => {
  let component: HelpacComponent;
  let fixture: ComponentFixture<HelpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
