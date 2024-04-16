import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "list-countries",
    templateUrl: "./list-countries.component.html",
    styleUrls: ['./list-countries.component.scss']
})
export class ListcountriesComponent implements OnInit {
    listCountries = [
        {
            name: 'Colombia',
            description: 'descripción de Colombia',
            capital: 'Bógota'
        },
        {
            name: 'Venezuela',
            description: 'descripción de Venezuela',
            capital: 'Caracas'
        },
        {
            name: 'Argentina',
            description: 'descripción de Argentina',
            capital: 'Buenos Aires'
        },
        {
            name: 'Perú',
            description: 'descripción de Perú',
            capital: 'Lima'
        },
        {
            name: 'Mexico',
            description: 'descripción de Mexico',
            capital: 'Ciudad de Mexico'
        },
        {
            name: 'Estados Unidos',
            description: 'descripción de Estados Unidos',
            capital: 'Washington'
        },
        {
            name: 'Dinamarca',
            description: 'descripción de Dinamarca',
            capital: 'Copenhague'
        },
        {
            name: 'España',
            description: 'descripción de España',
            capital: 'Madrid'
        },
        {
            name: 'Chile',
            description: 'descripción de Chile',
            capital: 'Snatiago de Chile'
        }
    ]

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
    }

    onNavItemTap(navItemRoute: string, data: any): void {
        this.routerExtensions.navigate([navItemRoute], {
          transition: {
            name: 'fade',
          },
          state: {country: this.listCountries[data.index]}
        })
      }
}
