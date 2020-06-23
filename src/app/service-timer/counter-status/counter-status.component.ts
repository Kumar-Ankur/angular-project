import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../service-timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-status',
  templateUrl: './counter-status.component.html',
  styleUrls: ['./counter-status.component.scss'],
})
export class CounterStatusComponent implements OnInit, OnDestroy {
  startCount: number;
  pausedCount: number;
  StartCountSubscription: Subscription;
  PausedCountSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.startCount = 0;
    this.pausedCount = 0;
  }

  ngOnInit(): void {
    this.StartCountSubscription = this.timerService.setStartCountValue.subscribe((value) => {
      this.startCount = value;
    });
    this.PausedCountSubscription = this.timerService.setPausedCountValue.subscribe((value) => {
      this.pausedCount = value;
    });
  }

  ngOnDestroy() {
    this.StartCountSubscription.unsubscribe();
    this.PausedCountSubscription.unsubscribe();
  }
}
