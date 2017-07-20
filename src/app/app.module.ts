import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AppRoutes} from "./app.routing";
import {SidebarModule} from "./sidebar/sidebar.module";
import {FooterModule} from "./shared/footer/footer.module";
import {NavbarModule} from "./shared/navbar/navbar.module";
import {FixedPluginModule} from "./shared/fixedplugin/fixedplugin.module";
import {NguiMapModule} from "@ngui/map";
import {UserComponent} from "./user/user.component";
import {TableComponent} from "./table/table.component";
import {TypographyComponent} from "./typography/typography.component";
import {IconsComponent} from "./icons/icons.component";
import {MapsComponent} from "./maps/maps.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {UpgradeComponent} from "./upgrade/upgrade.component";
import {DataTablesModule} from "angular-datatables";
import {GenerationModule} from "./generation/generation.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {IncomeComponent} from "./income/income.component";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    IncomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    GenerationModule,
    ProductsModule,
    DataTablesModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
