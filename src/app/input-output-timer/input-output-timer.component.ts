import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-timer',
  templateUrl: './input-output-timer.component.html',
  styleUrls: ['./input-output-timer.component.scss'],
})
export class InputOutputTimerComponent implements OnInit {
  timerLimit: number;
  startCount: number;
  pausedCount: number;
  startTime: string;
  resetStartLog: boolean;

  constructor() {
    this.timerLimit = 0;
    this.startCount = 0;
    this.pausedCount = 0;
    this.startTime = '';
    this.resetStartLog = false;
  }

  ngOnInit(): void {}

  setTimerLimit(timer: number): void {
    this.timerLimit = timer;
  }

  setStartCount(count: number): void {
    this.startCount = count;
  }

  setPausedCount(count: number): void {
    this.pausedCount = count;
  }

  setStartTime(startTime: string): void {
    this.startTime = startTime;
  }

  resetStartLogs(status: boolean): void {
    this.resetStartLog = status;
  }
}
