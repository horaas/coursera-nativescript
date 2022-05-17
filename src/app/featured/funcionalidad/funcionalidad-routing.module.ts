import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { FuncionalidadComponent } from './funcionalidad.component'


const routes: Routes = [{ path: '', component: FuncionalidadComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class FuncionalidadRoutingModule {}
