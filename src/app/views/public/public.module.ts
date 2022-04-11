import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicRoutes } from './public.routing';
//Home
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../../components/components.component';

/* import { AbstractControl } from '@google/model-viewer'; */
import { CarouselModule } from 'ngx-owl-carousel-o';
/* import { CatalogueComponent } from './catalogue/catalogue.component'; */
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    //Views - Public
    /* Personalized components */

    /* Public Componentes*/

    /* Public views*/
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    /* CatalogueComponent, */
    ContactComponent,
  ],
  imports: [
    //Imports only for this module
    /* This module has and gives the principal router ability and routes  */
    RouterModule.forChild(PublicRoutes),

    CommonModule,
    /* Gives the directives and biding functions in the components */
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    /* Owl carrousel */
    CarouselModule,
  ],
})
export class PublicModule { }
