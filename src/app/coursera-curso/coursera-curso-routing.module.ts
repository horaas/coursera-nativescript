import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CourseraCursoComponent } from './coursera-curso.component'

const routes: Routes = [{ path: '', component: 
CourseraCursoComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CourseraCursoRoutingModule {}
