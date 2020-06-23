import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../service-timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit, OnDestroy {
  startList: string[];
  startTimeSubscription: Subscription;
  resetTimeSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.startList = [];
  }

  ngOnInit(): void {
    this.resetTimeSubscription = this.timerService.emitResetStartLogs.subscribe((reset: boolean) => {
      if (reset) {
        this.startList = [];
      }
    });
    this.startTimeSubscription = this.timerService.setStartTime.subscribe((time: string) => {
      this.startList.push(time);
    });
  }

  ngOnDestroy() {
    this.resetTimeSubscription.unsubscribe();
    this.startTimeSubscription.unsubscribe();
  }
}
