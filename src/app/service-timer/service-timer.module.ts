import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTimerRoutingModule } from './service-timer-routing.module';
import { ServiceTimerComponent } from './service-timer.component';
import { CounterStatusComponent } from './counter-status/counter-status.component';
import { DisplayComponent } from './display/display.component';
import { FormsComponent } from './forms/forms.component';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  imports: [CommonModule, ServiceTimerRoutingModule],
  declarations: [ServiceTimerComponent, CounterStatusComponent, DisplayComponent, FormsComponent, LoggerComponent],
})
export class ServiceTimerModule {}
