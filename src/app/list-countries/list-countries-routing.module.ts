import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ListcountriesComponent } from "./list-countries.component";

const routes: Routes = [
    { path: "", component: ListcountriesComponent },
    {
        path: 'details',
        loadChildren: () => import('./list-countries-details/list-countries-details.routing.module').then((m) => m.ListCountriesDetailsRoutingModule),
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListcountriesRoutingModule { }
