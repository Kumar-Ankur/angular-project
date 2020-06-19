import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [{ path: '', component: EcommerceComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class EcommerceRoutingModule {}
