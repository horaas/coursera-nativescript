import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, isAndroid } from '@nativescript/core'
import { FuncionalidadesService } from '../providers/funcionalidades.services';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showAlertAndroid: boolean = false
  constructor(public funcionalidades: FuncionalidadesService) {
    
		
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    if (isAndroid) {
      this.showAlertAndroid = true
    }
    // Init your component properties here.
    this.funcionalidades.setFuncionalidades('home')
    this.funcionalidades.setFuncionalidades('browser')
    this.funcionalidades.setFuncionalidades('search')
    this.funcionalidades.setFuncionalidades('featured')
    this.funcionalidades.setFuncionalidades('about')
    if (this.showAlertAndroid) {
      alert('estoy en android')
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
