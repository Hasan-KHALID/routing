import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElemensModule } from './elemens/elemens.module';
import { CollectinonsModule } from './collectinons/collectinons.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElemensModule,
    CollectinonsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
