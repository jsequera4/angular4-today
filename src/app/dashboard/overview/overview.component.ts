/**
 * Created by Arthur on 7/17/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'overview-cmp',
    moduleId: module.id,
    templateUrl: 'overview.component.html'
})

export class OverviewComponent{
    public percent: number;
    public options: any;

    constructor(){
        this.percent = 34;
        this.options = {
            barColor: '#FFFFFF',
            trackColor: 'rgba(255,255,255,.25)',
            scaleColor: false,
            lineCap: 'round',
            lineWidth: 3,
            size: 160,
            rotate: 0,
            animate: {
                duration: 3000,
                enabled: true
            }
        };
    }
}
