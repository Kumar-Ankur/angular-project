import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

class TimerInterface {
  timerLimit: number;
  startCount: number;
  pausedCount: number;
  startTime: string;
  resetLogs: boolean;
}
@Component({
  selector: 'app-input-output-timer',
  templateUrl: './input-output-timer.component.html',
  styleUrls: ['./input-output-timer.component.scss'],
})
export class InputOutputTimerComponent implements OnInit {
  timerValue: TimerInterface;

  constructor() {
    this.timerValue = {
      timerLimit: 0,
      startCount: 0,
      pausedCount: 0,
      startTime: '',
      resetLogs: false,
    };
  }

  ngOnInit(): void {}

  setTimerEmitter(event: any) {
    this.timerValue = { ...this.timerValue, ...event };
  }
}
