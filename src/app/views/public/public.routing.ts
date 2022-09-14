import { NotfoundComponent } from './404/not-found.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';

export const PublicRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          pageTitle : 'Información general de la empresa', // Only for dashboards
          title : 'IM TECH',
          description:'',
          keywords : '',
          ogUrl: 'https://ingmulti.com/#/',
          ogTitle: 'IM TECH',
          ogDescription : '',
          ogImage : 'https://ingmulti.com/#/assets/minified/images/meta.png',
          urls: [
            { title: 'Inicio', url: '/dashboard-admin/home' },
            { title: 'Inicio' }
          ]
        }
      },/*
      {
        path: 'catalogue',
        component: CatalogueComponent,
        data: {
          pageTitle : 'Catalogo de productos', // Only for dashboards
          title : 'IM TECH | Catalogo de productos',
          description:'',
          keywords : '',
          ogUrl: 'https://ingmulti.com/#/',
          ogTitle: 'IM TECH',
          ogDescription : '',
          ogImage : 'https://ingmulti.com/#/assets/minified/images/meta.png',
          urls: [
            { title: 'Inicio', url: '/dashboard-admin/home' },
          ]
        }
      }, */
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          pageTitle : 'Catalogo de productos', // Only for dashboards
          title : 'IM TECH | Catalogo de productos',
          description:'',
          keywords : '',
          ogUrl: 'https://ingmulti.com/#/',
          ogTitle: 'IM TECH',
          ogDescription : '',
          ogImage : 'https://ingmulti.com/#/assets/minified/images/meta.png',
          urls: [
            { title: 'Inicio', url: '/dashboard-admin/home' },
            /* { title: 'Inicio' } */
          ]
        }
      },
      /* {
        path: 'login',
        component: LoginComponent,
        data: {
          pageTitle : 'Información general de la empresa', // Only for dashboards
          title : 'IM TECH',
          description:'',
          keywords : '',
          ogUrl: 'https://ingmulti.com/#/',
          ogTitle: 'IM TECH',
          ogDescription : '',
          ogImage : 'https://ingmulti.com/#/assets/minified/images/meta.png',
          urls: [
            { title: 'Inicio', url: '/dashboard-admin/home' },
            { title: 'Inicio' }
          ]
        }
      }, */
    ]
  }
];
