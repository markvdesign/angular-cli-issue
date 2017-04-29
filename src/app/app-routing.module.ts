import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';

const modName = 'Lazy';

const appRoutes: Routes = [
  { path: '', component: SecondComponent },
  {
    path: 'lazyMod',
    // loadChildren: 'app/lazy-mod/lazy-mod.module#LazyModModule'
    loadChildren: 'app/' + modName.toLowerCase() + '-mod/lazy-mod.module#' + modName + 'ModModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
