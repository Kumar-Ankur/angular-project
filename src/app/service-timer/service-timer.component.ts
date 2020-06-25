import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from './service-timer.service';

@Component({
  selector: 'app-service-timer',
  templateUrl: './service-timer.component.html',
  styleUrls: ['./service-timer.component.scss'],
})
export class ServiceTimerComponent implements OnInit, OnDestroy {
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.timerService.unsubscribeService();
  }
}
