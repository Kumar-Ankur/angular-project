import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit, OnChanges {
  @Input() startTime: string;
  @Input() resetStartLog: boolean;
  startList: string[];
  constructor() {
    this.startList = [];
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resetStartLog && changes.resetStartLog.currentValue) {
      this.startList.length = 0;
    }
    if (changes.startTime && changes.startTime.currentValue) {
      this.startList.push(changes.startTime.currentValue);
    }
  }
}
