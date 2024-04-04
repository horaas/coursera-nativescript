import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { FuncionalidadesService } from '../providers/funcionalidades.services';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(public funcionalidades: FuncionalidadesService) {
    
		
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.funcionalidades.setFuncionalidades('home')
    this.funcionalidades.setFuncionalidades('browser')
    this.funcionalidades.setFuncionalidades('search')
    this.funcionalidades.setFuncionalidades('featured')
    this.funcionalidades.setFuncionalidades('about')
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
