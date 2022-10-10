import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectinonsRoutingModule } from './collectinons-routing.module';
import { CollectinsHomeComponent } from './collectins-home/collectins-home.component';


@NgModule({
  declarations: [
    CollectinsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectinonsRoutingModule
  ],
  exports: [CollectinsHomeComponent]
})
export class CollectinonsModule { }
