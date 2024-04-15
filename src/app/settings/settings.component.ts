import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

import * as dialog from '@nativescript/core/ui/dialogs'
import * as Toast from 'nativescript-toast'
@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.doLater(() => {
      // dialog.action('prueba', 'cancelar', [
      //   'opcion 1',
      //   'opcion 2'
      // ]).then((option) => {
      //   console.error(option)
      // })
      // const tosttest: Toast.ToastOption = {text: 'hello', duration: Toast.duration.long}
      const toast = Toast.makeText("Hello World", 'long');
      toast.show()
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  doLater(fn) {setTimeout(fn, 2000);}
}
