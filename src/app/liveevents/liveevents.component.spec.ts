import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveeventsComponent } from './liveevents.component';

describe('LiveeventsComponent', () => {
  let component: LiveeventsComponent;
  let fixture: ComponentFixture<LiveeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
