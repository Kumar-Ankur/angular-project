import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputTimerComponent } from './input-output-timer.component';

describe('InputOutputTimerComponent', () => {
  let component: InputOutputTimerComponent;
  let fixture: ComponentFixture<InputOutputTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
