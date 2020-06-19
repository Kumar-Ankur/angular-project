import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, EcommerceRoutingModule],
  declarations: [EcommerceComponent, GridComponent, ListComponent],
})
export class EcommerceModule {}
