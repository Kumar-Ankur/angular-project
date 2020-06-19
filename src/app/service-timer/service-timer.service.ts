import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimerService {
  setTimerValue = new Subject<number>();
  setStartCountValue = new Subject<number>();
  setPausedCountValue = new Subject<number>();
  setStartTime = new Subject<string>();
  emitResetStartLogs = new Subject<boolean>();
}
