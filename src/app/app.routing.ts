import {Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {TableComponent} from "./table/table.component";
import {TypographyComponent} from "./typography/typography.component";
import {IconsComponent} from "./icons/icons.component";
import {MapsComponent} from "./maps/maps.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {UpgradeComponent} from "./upgrade/upgrade.component";
import {GenerationComponent} from "./generation/generation.component";
import {OverviewComponent} from "./dashboard/overview/overview.component";
import {StatsComponent} from "./dashboard/stats/stats.component";
import {IncomeComponent} from "./income/income.component";
import {ProductsComponent} from "./products/products.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'stats',
        component: StatsComponent
    },
    {
        path: 'mapato',
        component: IncomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'stoo',
        component: ProductsComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'mtandao',
        component: GenerationComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
];
