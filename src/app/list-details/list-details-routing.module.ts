import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ListDetalisComponent } from './list-details.component'

const routes: Routes = [{ path: '', component: ListDetalisComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ListDetailsRoutingModule {}
