import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() emitTimerValue: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitStartCount: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitPausedCount: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitStartTime: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitResetStartLogs: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor() {
    this.timerLimit = 0;
    this.startCount = 0;
    this.pausedCount = 0;
    this.isTimerStart = false;
    this.pausedTime = [];
    this.startTime = '';
  }

  ngOnInit(): void {}

  setInput(event: any) {
    this.timerLimit = event.target.value;
    this.setToInitialState();
  }

  handleButton() {
    if (this.timerLimit > 0) {
      this.isTimerStart = !this.isTimerStart;
      if (this.isTimerStart) {
        this.startCount = this.startCount + 1;
        this.emitStartCount.emit(this.startCount);
        this.startTime = new Date().toString();
        this.emitStartTime.emit(this.startTime);
        this.emitResetStartLogs.emit(false);
        this.timerInterval = setInterval(() => {
          if (this.timerLimit === 0) {
            clearInterval(this.timerInterval);
            this.IsStartVisible();
            this.isTimerStart = false;
          }
          this.emitTimerValue.emit(this.timerLimit);
          this.timerLimit = this.timerLimit - 1;
        }, 1000);
      } else {
        this.pausedCount = this.pausedCount + 1;
        this.emitPausedCount.emit(this.pausedCount);
        this.emitResetStartLogs.emit(false);
        this.pausedTime.push(this.timerLimit + 1);
        clearInterval(this.timerInterval);
      }
    }
  }

  handleReset(): void {
    this.timerLimit = 0;
    this.setToInitialState();
  }

  IsStartVisible(): boolean {
    if (this.timerLimit < 0) {
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
    this.emitTimerValue.emit(0);
    this.emitStartCount.emit(this.startCount);
    this.emitPausedCount.emit(this.pausedCount);
    this.emitResetStartLogs.emit(true);
    clearInterval(this.timerInterval);
  }
}
