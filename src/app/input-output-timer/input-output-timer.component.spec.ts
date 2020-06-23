import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputTimerComponent } from './input-output-timer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { FormsComponent } from './forms/forms.component';
import { LoggerComponent } from './logger/logger.component';
import { CounterStatusComponent } from './counter-status/counter-status.component';

describe('InputOutputTimerComponent', () => {
  let component: InputOutputTimerComponent;
  let fixture: ComponentFixture<InputOutputTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule],
      declarations: [InputOutputTimerComponent, DisplayComponent, FormsComponent, LoggerComponent, CounterStatusComponent],
    }).compileComponents();
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
