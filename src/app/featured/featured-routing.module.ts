import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { FeaturedComponent } from './featured.component'

const routes: Routes = [
  { path: '', component: FeaturedComponent },
  {
    path: 'funcionalidad',
    loadChildren: () => import('./funcionalidad/funcionalidad.module').then((m) => m.FuncionalidadModule),
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class FeaturedRoutingModule {}
