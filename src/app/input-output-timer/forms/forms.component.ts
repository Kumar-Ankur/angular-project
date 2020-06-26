import { Component, OnInit, Output, EventEmitter } from '@angular/core';

class TimerEmitterInterface {
  timerLimit?: number;
  startCount?: number;
  pausedCount?: number;
  startTime?: string;
  resetLogs?: boolean;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  timerLimit: number;
  startCount: number;
  pausedCount: number;
  pausedTime: number[];
  startTime: string;
  timerInterval: any;
  isTimerStart: boolean;
  inputText: string;
  @Output() TimerEmitter: EventEmitter<TimerEmitterInterface> = new EventEmitter<TimerEmitterInterface>();

  constructor() {
    this.timerLimit = 0;
    this.startCount = 0;
    this.pausedCount = 0;
    this.isTimerStart = false;
    this.pausedTime = [];
    this.startTime = '';
    this.inputText = '';
  }

  ngOnInit(): void {}

  // Function to set the input enter by the user
  setInput(event: any) {
    this.timerLimit = event.target.value;
    this.inputText = '';
    this.setToInitialState();
  }

  /**
   * function { handleButton}
   * description: function to check if user clicked on start/pause button and emit the result to parent component respectively
   */
  handleButton() {
    if (this.timerLimit > 0) {
      this.inputText = '';
      this.isTimerStart = !this.isTimerStart;
      if (this.isTimerStart) {
        this.startCount = this.startCount + 1;
        this.startTime = new Date().toString();
        this.TimerEmitter.emit({
          startCount: this.startCount,
          startTime: this.startTime,
          resetLogs: false,
          pausedCount: this.pausedCount,
        });
        this.timerInterval = setInterval(() => {
          if (this.timerLimit === 0) {
            clearInterval(this.timerInterval);
            this.IsStartVisible();
            this.isTimerStart = false;
          }
          this.TimerEmitter.emit({
            timerLimit: this.timerLimit,
          });
          this.timerLimit = this.timerLimit - 1;
        }, 1000);
      } else {
        this.pausedCount = this.pausedCount + 1;
        this.TimerEmitter.emit({
          startCount: this.startCount,
          startTime: this.startTime,
          resetLogs: false,
          pausedCount: this.pausedCount,
          timerLimit: this.timerLimit,
        });
        this.pausedTime.push(this.timerLimit);
        clearInterval(this.timerInterval);
      }
    }
  }

  // function to reset the state, if user clicked on reset button
  handleReset(): void {
    this.timerLimit = 0;
    this.setToInitialState();
  }

  // Return true/false to check if user is able to see start/pause button.
  IsStartVisible(): boolean {
    if (this.timerLimit < 0) {
      return true;
    } else if (this.isTimerStart) {
      return false;
    }
    return true;
  }

  // Reset all the state to its initial value, if user clicked on reset button or change the value in input field.
  setToInitialState(): void {
    this.pausedTime = [];
    this.startCount = 0;
    this.pausedCount = 0;
    this.isTimerStart = false;
    this.TimerEmitter.emit({
      startCount: this.startCount,
      pausedCount: this.pausedCount,
      resetLogs: true,
      timerLimit: 0,
    });
    clearInterval(this.timerInterval);
  }
}
