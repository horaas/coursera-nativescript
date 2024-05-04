import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { FavoritesComponent } from './favorites.component'

const routes: Routes = [
  { path: '', component: FavoritesComponent },
  {
    path: 'read-details',
    loadChildren: () => import('./read-details/read-details.module').then((m) => m.ReadDetailsModule),
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class FavoritesRoutingModule { }
