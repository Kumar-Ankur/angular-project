import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class ServiceTimerInterface {
  timerValue?: number;
  startCount?: number;
  pausedCount?: number;
  startTime?: string;
  resetStartLogs?: boolean;
  pausedTime?: number[];
}
@Injectable({ providedIn: 'root' })
export class TimerService {
  TimerServiceWithSubject = new Subject<ServiceTimerInterface>();

  inputText = 0;
  isTimerStart = false;
  startCount = 0;
  timerInterval: any;
  pausedCount = 0;
  pausedTime: number[] = [];
  startTime = '';

  onInputSelected(event: any) {
    this.inputText = event.target.value;
    this.setToInitialState();
  }

  setToInitialState(): void {
    this.pausedTime = [];
    this.startCount = 0;
    this.pausedCount = 0;
    this.isTimerStart = false;
    this.TimerServiceWithSubject.next({
      startCount: 0,
      pausedCount: 0,
      timerValue: 0,
      resetStartLogs: true,
      pausedTime: this.pausedTime,
    });
    clearInterval(this.timerInterval);
  }

  handleButton(): void {
    if (this.inputText > 0) {
      this.isTimerStart = !this.isTimerStart;
      if (this.isTimerStart) {
        this.startCount = this.startCount + 1;
        this.startTime = new Date().toString();
        this.TimerServiceWithSubject.next({
          startTime: this.startTime,
        });
        this.timerInterval = setInterval(() => {
          if (this.inputText === 0) {
            clearInterval(this.timerInterval);
            this.IsStartVisible();
            this.isTimerStart = false;
          }
          this.TimerServiceWithSubject.next({
            timerValue: +this.inputText,
            startCount: this.startCount,
            resetStartLogs: false,
            pausedCount: this.pausedCount,
            pausedTime: this.pausedTime,
          });
          this.inputText = this.inputText - 1;
        }, 1000);
      } else {
        this.pausedCount = this.pausedCount + 1;
        this.pausedTime.push(this.inputText);
        this.TimerServiceWithSubject.next({
          pausedCount: this.pausedCount,
          resetStartLogs: false,
          timerValue: this.inputText,
          startCount: this.startCount,
          pausedTime: this.pausedTime,
        });
        clearInterval(this.timerInterval);
      }
    }
  }

  // Function called when user clicked on reset button, to update the state to initial state
  handleReset(): void {
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

  unsubscribeService(): any {
    this.TimerServiceWithSubject.unsubscribe();
  }
}
