import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SortByPipe } from './ecommerce.pipe';

@NgModule({
  imports: [CommonModule, EcommerceRoutingModule, NavigationModule, SpinnerModule],
  declarations: [EcommerceComponent, GridComponent, ListComponent, SortByPipe],
})
export class EcommerceModule {}
