import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Dialogs } from '@nativescript/core'
import * as Toast from 'nativescript-toast'

@Component({
    selector: "list-countries-details",
    templateUrl: "./list-countries-details.component.html",
    styleUrls: ['./list-countries-details.component.scss']
})
export class ListCountriesDetailsComponent implements OnInit {

    country: any = {}
    constructor(private _routerExtensions: Router) {
        this.country = this._routerExtensions.getCurrentNavigation().extras.state.country as any
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
    }

    handleEditDescription() {
        Dialogs.prompt({
            title: 'Editar capital',
            okButtonText: 'OK',
            neutralButtonText: 'Cancel',
        }).then((result) => {
            if (result.result && result.text.trim()) {
                this.country.description = result.text
                const toast = Toast.makeText("Actualización éxitosa", 'short');
                toast.show()
            }
        })
    }

    handleRemoveCountry() {
        Dialogs.confirm({
            message: '¿Seguro que deseea eliminar el país?',
            okButtonText: 'OK',
            neutralButtonText: 'Cancel',
        }).then((result) => {
            if (result) {
                Toast.makeText("Solo muestra mensaje Exitoso", 'short').show();
            } else {
                Toast.makeText("Solo muestra mensaje Cancelado", 'short').show();
            }
            
        })
    }
}
