import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElemensRoutingModule } from './elemens-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';


@NgModule({
  declarations: [
    ElementsHomeComponent
  ],
  imports: [
    CommonModule,
    ElemensRoutingModule
  ],
  exports: [ElementsHomeComponent]
})
export class ElemensModule { }
