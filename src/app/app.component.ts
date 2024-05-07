import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application, ApplicationSettings } from '@nativescript/core'
import '@nativescript/firebase-messaging'
import { firebase } from '@nativescript/firebase-core'
import { AuthorizationStatus } from '@nativescript/firebase-messaging-core'

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase
  userName: string = ''

  constructor(private router: Router, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.requestUserPermission()
    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._activatedUrl = event.urlAfterRedirects
        this.userName = ApplicationSettings.getString('userName') || 'sin Nombre'
      })
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }

  async requestUserPermission() {
    const messaging = await firebase().messaging()

    const authStatus = await messaging.requestPermission({
      ios: {
        alert: true,
      },
    })
    const enabled =
      authStatus === AuthorizationStatus.AUTHORIZED ||
      authStatus === AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('Authorization status:', authStatus)

      await messaging.registerDeviceForRemoteMessages()
      const token = await messaging.getToken()
      console.dir(token)
      await messaging.onMessage(async (remoteMessage) => {
        alert('A new FCM message arrived!' + JSON.stringify(remoteMessage))
      })
    }
  }
}
