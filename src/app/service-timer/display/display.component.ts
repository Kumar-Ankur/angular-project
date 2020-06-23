import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../service-timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit, OnDestroy {
  timerValue: number;
  timerValueSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.timerValue = 0;
  }

  ngOnInit(): void {
    this.timerValueSubscription = this.timerService.setTimerValue.subscribe((value) => {
      this.timerValue = value;
    });
  }

  ngOnDestroy() {
    this.timerValue = 0;
    this.timerValueSubscription.unsubscribe();
  }
}
