import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModComponent } from './lazy-mod/lazy-mod.component';

const routes: Routes = [
  { path: '', component: LazyModComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModRoutingModule { }
