import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { ActivityIndicator, Application, Color, View } from '@nativescript/core'
import { FuncionalidadesService } from '../providers/funcionalidades.services'
import { RouterExtensions } from '@nativescript/angular'
import { NewsService } from '../providers/news.service'
import * as Toast from 'nativescript-toast'

@Component({
  selector: 'List',
  templateUrl: './list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('layout') layout: ElementRef;

  resultData: string[] = []
  showActivityIndicator = true
  constructor(public funcionalidades: FuncionalidadesService, private routerExtensions: RouterExtensions,
    private newService: NewsService
  ) {
    // Use the component constructor to inject providers.

  }

  ngOnInit(): void {
    this.searchNow()
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
      state: { filter: this.funcionalidades.getFuncionalidades()[data.index] }
    })
  }

  searchNow(dataSearch?: string): void {
    this.showActivityIndicator = true
    this.newService.handleSearch(dataSearch).then((result: string[]) => {
      this.resultData = result
      this.showActivityIndicator = false
    }).catch(() => {
      this.showActivityIndicator = false
      Toast.makeText("Error en la busqueda", 'long').show()
    })
  }
  handleAddFavorite(resultDataSelected) {
    this.showActivityIndicator = true
    this.newService.add(resultDataSelected.id, !resultDataSelected.isFavSelect).then(() => {
      resultDataSelected.isFavSelect = !resultDataSelected.isFavSelect
      this.showActivityIndicator = false
      Toast.makeText("Se actualizo correctamente", 'long').show()
    })
    .catch(() => {
      this.showActivityIndicator = false
      Toast.makeText("Error en la busqueda", 'long').show()
    })
  }
}
