import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { ActivityIndicator, Application, Color, View } from '@nativescript/core'
import { FuncionalidadesService } from '../providers/funcionalidades.services'
import { RouterExtensions } from '@nativescript/angular'
import { NewsService } from '../providers/news.service'
import * as Toast from 'nativescript-toast'

@Component({
  selector: 'Favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @ViewChild('layout') layout: ElementRef;

  resultData: string[] = []
  showActivityIndicator = true

  constructor(public funcionalidades: FuncionalidadesService, private routerExtensions: RouterExtensions,
    private newService: NewsService
  ) {}

  ngOnInit(): void {
    this.searchNowFavorites()
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
      state: { filter: data }
    })
  }

  searchNowFavorites(dataSearch?: string): void {
    this.showActivityIndicator = true
    this.newService.handleSearch(dataSearch).then((result: any[]) => {
      this.resultData = result.filter((data) => data.isFavSelect)
      this.showActivityIndicator = false
    }).catch(() => {
      this.showActivityIndicator = false
      Toast.makeText("Error en la busqueda", 'long').show()
    })
  }
}
