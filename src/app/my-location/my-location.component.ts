import {Component} from '@angular/core'
import { registerElement } from '@nativescript/angular';
import { MapView } from '@nativescript/google-maps';


registerElement('MapView', () => MapView);

@Component({
    selector: 'ns-my-location',
    templateUrl: './my-location.component.html',
    styles:['./my-location.component.scss']
})
export class MyLocationComponent {

}