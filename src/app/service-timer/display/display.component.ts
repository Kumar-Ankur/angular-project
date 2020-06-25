import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service-timer.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  timerValue: number;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerValue = 0;
    this.timerService.TimerServiceWithSubject.subscribe((value) => {
      this.timerValue = value.timerValue;
    });
  }
}
