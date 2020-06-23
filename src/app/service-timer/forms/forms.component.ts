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
  text: string;
  constructor(private timerService: TimerService) {
    this.inputText = 0;
    this.isTimerStart = false;
    this.startCount = 0;
    this.pausedCount = 0;
    this.pausedTime = [];
    this.startTime = '';
    this.text = '';
  }

  ngOnInit(): void {}

  // Function to set the input value once user entered value in input field
  onSelectedInput(event: any): void {
    this.inputText = event.target.value;
    this.text = '';
    this.setToInitialState();
  }

  /**
   * function { handleStartPause}
   * description: function to check if user clicked on start/pause button and call the service to update teh state respectively
   */
  handleStartPause(): void {
    if (this.inputText > 0) {
      this.text = '';
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

  // Function called when user clicked on reset button, to update the state to initial state
  handleReset(): void {
    this.inputText = 0;
    this.setToInitialState();
  }

  // Return true/false to check if user is able to see start/pause button.
  IsStartVisible(): boolean {
    if (this.inputText < 0) {
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
    this.timerService.setStartCountValue.next(this.startCount);
    this.timerService.setPausedCountValue.next(this.pausedCount);
    this.timerService.setTimerValue.next(0);
    this.timerService.emitResetStartLogs.next(true);
    this.isTimerStart = false;
    clearInterval(this.timerInterval);
  }
}
