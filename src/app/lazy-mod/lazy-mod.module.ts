import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModRoutingModule } from './lazy-mod-routing.module';
import { LazyModComponent } from './lazy-mod/lazy-mod.component';

@NgModule({
  imports: [
    CommonModule,
    LazyModRoutingModule
  ],
  declarations: [LazyModComponent]
})
export class LazyModModule { }
