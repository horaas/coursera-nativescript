import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ApplicationSettings } from '@nativescript/core'

import * as dialog from '@nativescript/core/ui/dialogs'
import * as Toast from 'nativescript-toast'
import { RouterExtensions } from '@nativescript/angular'
@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userNameValue: string = ''
  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }


  handleSaveNameUser(userName: string) {
    if (userName && userName.trim()) {
      dialog.confirm(`¿Esta seguro de actualizar el nombre de usuario a ${userName}?`).then((resultBtn) => {
        if (resultBtn) {
          ApplicationSettings.setString('userName', userName)
          const toast = Toast.makeText(`El nombre ${userName} fue actualizado con exito`, 'long');
          
          this.routerExtensions.navigate(['/']).then(() => toast.show())
        }
      })
      return
    }
    dialog.alert('Ingrese un valor en el campo')

  }
}
