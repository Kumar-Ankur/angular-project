import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service-timer.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  startList: string[];
  constructor(private timerService: TimerService) {
    this.startList = [];
  }

  ngOnInit(): void {
    this.timerService.TimerServiceWithSubject.subscribe((value) => {
      if (value.resetStartLogs) {
        this.startList = [];
      }
    });
    this.timerService.TimerServiceWithSubject.subscribe((value) => {
      if (value.startTime) {
        this.startList.push(value.startTime);
      }
    });
  }
}
