import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { FuncionalidadesService } from '../providers/funcionalidades.services'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'List',
  templateUrl: './list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(public funcionalidades: FuncionalidadesService, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.

  }

  ngOnInit(): void {
    this.funcionalidades.setFuncionalidades('guia')
    this.funcionalidades.setFuncionalidades('lugares')
    this.funcionalidades.setFuncionalidades('sugerencias')
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
      state: {filter: this.funcionalidades.getFuncionalidades()[data.index]}
    })
  }

}
