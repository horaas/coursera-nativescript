import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { Button, Color, CoreTypes, View } from "@nativescript/core";
@Component({
    selector: "form-search",
    templateUrl: "./form-search.component.html",
    styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

    textfielValue: string = ''
    @Output() searchResult: EventEmitter<string> = new EventEmitter()
    @ViewChild('buttonSearch') buttonSearch: ElementRef;
    @ViewChild('iconSearch') iconSearch: ElementRef;

    constructor() {

    }

    ngOnInit(): void {
    }

    handleSearch(dataValue, cleanResult?: boolean): void {
        const layout = <Button>this.buttonSearch.nativeElement

        if (!cleanResult && dataValue.length > 2) {
            layout.text = ''
            layout.animate({
                opacity: 1,
                duration: 500,
            }).then(() => {
                layout.text = ''
                layout.animate({
                    rotate: 180,
                    duration: 1000,
                    delay: 250
                }).then(() => {
                    layout.text = ''
                    setTimeout(() => {
                        layout.text = ''
                        layout.rotate = 0
                        this.searchResult.emit(dataValue)
                    }, 500)
                })
            })
            
            return
        }

        if (cleanResult && dataValue.length <= 2) {
            this.searchResult.emit('')
        }
    }

}
