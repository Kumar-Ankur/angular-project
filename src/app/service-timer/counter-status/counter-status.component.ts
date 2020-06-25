import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service-timer.service';

@Component({
  selector: 'app-counter-status',
  templateUrl: './counter-status.component.html',
  styleUrls: ['./counter-status.component.scss'],
})
export class CounterStatusComponent implements OnInit {
  startCount: number;
  pausedCount: number;
  constructor(private timerService: TimerService) {
    this.startCount = 0;
    this.pausedCount = 0;
  }

  ngOnInit(): void {
    this.timerService.TimerServiceWithSubject.subscribe((value) => {
      this.startCount = value.startCount;
    });
    this.timerService.TimerServiceWithSubject.subscribe((value) => {
      this.pausedCount = value.pausedCount;
    });
  }
}
