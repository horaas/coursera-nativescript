import { NgModule } from "@angular/core";
    import { Routes } from "@angular/router";
    import { NativeScriptRouterModule } from "nativescript-angular/router";
    
    import { SearchFormComponent } from "./search-form.component";
    
    const routes: Routes = [
        { path: "", component: SearchFormComponent }
    ];
    
    @NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule]
    })
    export class SearchFormRoutingModule { }
