import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'featured/funcionalidad',
    loadChildren: () => import('~/app/featured/funcionalidad/funcionalidad.module').then((m) => m.FuncionalidadModule)
  },

  {
    path: 'component-nuevo1',
    loadChildren: () => import('~/app/coursera/coursera.module').then((m) => m.CourseraModule),
  },
  {
    path: 'component-nuevo2',
    loadChildren: () => import('~/app/coursera-curso/coursera-curso.module').then((m) => m.CourseraCursoModule),
  },
  // {
  //   path: 'funcionalidad',
  //   loadChildren: () => import('~/app/featured/funcionalidad/funcionalidad-routing.module').then((m) => m.FuncionalidadRoutingModule),
  // }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
