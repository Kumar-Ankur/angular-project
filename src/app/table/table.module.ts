import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [CommonModule, TableRoutingModule, NavigationModule, SpinnerModule],
  declarations: [TableComponent],
})
export class TableModule {}
