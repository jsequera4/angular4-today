import {Component, OnInit} from "@angular/core";
import {PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'overview', title: 'Overview'},
    { path: 'stats', title: 'User Stats'},
    { path: 'mapato', title: 'Mapato'},
    { path: 'mtandao', title: 'Mtandao'},
    { path: 'manunuzi', title: 'Historia ya Manunuzi'},
    { path: 'stoo', title: 'Stoo'},
    { path: 'nunua', title: 'Nunua bidhaa'}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    public config: PerfectScrollbarConfigInterface = {};
    public menuItems: any[];

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isNotMobileMenu = () => {
        return $(window).width() <= 991;
    }

}
