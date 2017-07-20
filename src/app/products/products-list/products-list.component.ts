/**
 * Created by Arthur on 7/18/2017.
 */
import {Component, OnInit} from "@angular/core";

declare var $:any;

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    isMobile(): boolean{
        return $(window).width() <= 480;
    }
}
