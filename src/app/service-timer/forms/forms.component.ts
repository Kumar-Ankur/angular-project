import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service-timer.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  inputText: number;
  isTimerStart: boolean;
  startCount: number;
  timerInterval: any;
  pausedCount: number;
  pausedTime: number[];
  startTime: string;
  constructor(private timerService: TimerService) {
    this.inputText = 0;
    this.isTimerStart = false;
    this.startCount = 0;
    this.pausedCount = 0;
    this.pausedTime = [];
    this.startTime = '';
  }

  ngOnInit(): void {}

  onSelectedInput(event: any) {
    this.inputText = event.target.value;
    this.setToInitialState();
  }

  handleStartPause(): void {
    if (this.inputText > 0) {
      this.isTimerStart = !this.isTimerStart;
      if (this.isTimerStart) {
        this.startCount = this.startCount + 1;
        this.timerService.setStartCountValue.next(this.startCount);
        this.startTime = new Date().toString();
        this.timerService.setStartTime.next(this.startTime);
        this.timerService.emitResetStartLogs.next(false);
        this.timerInterval = setInterval(() => {
          if (this.inputText === 0) {
            clearInterval(this.timerInterval);
            this.IsStartVisible();
            this.isTimerStart = false;
          }
          this.timerService.setTimerValue.next(+this.inputText);
          this.inputText = this.inputText - 1;
        }, 1000);
      } else {
        this.pausedCount = this.pausedCount + 1;
        this.timerService.setPausedCountValue.next(this.pausedCount);
        this.pausedTime.push(this.inputText + 1);
        this.timerService.emitResetStartLogs.next(false);
        clearInterval(this.timerInterval);
      }
    }
  }
  handleReset() {
    this.inputText = 0;
    this.setToInitialState();
  }

  IsStartVisible(): boolean {
    if (this.inputText < 0) {
      return true;
    } else if (this.isTimerStart) {
      return false;
    }
    return true;
  }

  setToInitialState(): void {
    this.pausedTime = [];
    this.startCount = 0;
    this.pausedCount = 0;
    this.timerService.setStartCountValue.next(this.startCount);
    this.timerService.setPausedCountValue.next(this.pausedCount);
    this.timerService.setTimerValue.next(0);
    this.timerService.emitResetStartLogs.next(true);
    this.isTimerStart = false;
    clearInterval(this.timerInterval);
  }
}
