import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-status',
  templateUrl: './counter-status.component.html',
  styleUrls: ['./counter-status.component.scss'],
})
export class CounterStatusComponent implements OnInit {
  @Input() startCount: number;
  @Input() pausedCount: number;
  constructor() {}

  ngOnInit(): void {}
}
