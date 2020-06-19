import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputOutputTimerComponent } from './input-output-timer.component';

const routes: Routes = [{ path: '', component: InputOutputTimerComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class InputOutputTimerRoutingModule {}
