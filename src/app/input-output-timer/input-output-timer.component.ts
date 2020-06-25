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

  // Function to check the timer limit entered by the user
  setTimerLimit(timer: number) {
    this.timerLimit = timer;
  }

  // Update the start count once user click on start button.
  setStartCount(count: number) {
    this.startCount = count;
  }

  // Update the pause count once user click on pause button.
  setPausedCount(count: number) {
    this.pausedCount = count;
  }

  // set the start time
  setStartTime(startTime: string) {
    this.startTime = startTime;
  }

  // reset the start logs
  resetStartLogs(status: boolean) {
    this.resetStartLog = status;
  }
}

// Will add one event emmiter here only
