import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Layouts */
import { BlankComponent } from './layouts/blank/blank.component';
import { FullPublicTransparentComponent } from './layouts/full-public-transparent/full-public-transparent.component';
import { FullPublicComponent } from './layouts/full-public/full-public.component';
/* Views */
import { NotfoundComponent } from './views/public/404/not-found.component';
import { CatalogueComponent } from './views/public/catalogue/catalogue.component';

const routes: Routes = [
  { path: '', redirectTo: '/'/* '/landing-page' */, pathMatch: 'full' },
  {
    path: '',
    component: FullPublicComponent,
    children: [
      {
        path: '',
        //Se carga de esta manera porque dentro del modulo del dashboard vienen componentes e importaciones que
        //se comparten y pueden usar en las vistas dentro del modulo
        loadChildren: () => import('./views/public/public.module').then(m => m.PublicModule)
      },
    ]
  },
  {
    path: '',
    component: FullPublicTransparentComponent,
    children: [
      {
        path: 'catalogue',
        component: CatalogueComponent,
        data: {
          pageTitle : 'Catalogo de productos', // Only for dashboards
          title : 'IM TECNOLOGÍA | Catalogo de productos',
          description:'',
          keywords : '',
          ogUrl: 'https://ingmulti.com/#/',
          ogTitle: 'IM TECNOLOGÍA',
          ogDescription : '',
          ogImage : 'https://ingmulti.com/#/assets/minified/images/meta.png',
          urls: [
            { title: 'Inicio', url: '/home' },
          ]
        }
      },
    ]
  },
  {
    path: '',
    //pathMatch: 'full',
    component: BlankComponent,
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
    ]
  },
  //Redireccionamiento en caso de que no exista la ruta
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false,scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
