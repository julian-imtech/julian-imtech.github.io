/* Default app imports for this architecture */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
/* Router */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Layouts */
import { BlankComponent } from './layouts/blank/blank.component';
import { FullPublicComponent } from './layouts/full-public/full-public.component';
/* Layouts Components */
import { NavigationPublicComponent } from './components/public/header-navigation-public/navigation-public.component';
import { FooterPublicComponent } from './components/public/footer-public/footer-public.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavigationAdminComponent } from './components/dashboards/admin/header-navigation-admin/navigation-admin.component';
import { SidebarAdminComponent } from './components/dashboards/admin/sidebar-admin/sidebar-admin.component';
/* Library's */
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PERFECT_SCROLLBAR_CONFIG,PerfectScrollbarConfigInterface,PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FullPublicTransparentComponent } from './layouts/full-public-transparent/full-public-transparent.component';

/* Components with out module */
import { CatalogueComponent } from './views/public/catalogue/catalogue.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    /* Principal Component */
    AppComponent,
    /* Layouts */
    BlankComponent,
    FullPublicComponent,
    FullPublicTransparentComponent,
    /* Layouts Components */
    NavigationPublicComponent,
    FooterPublicComponent,
    BreadcrumbComponent,
    NavigationAdminComponent,
    SidebarAdminComponent,
    /* Components with out module */
    CatalogueComponent,
  ],
  imports: [// Imports for all app
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /* This module has and gives the principal router ability and routes  */
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgbModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
