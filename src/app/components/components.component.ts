import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Componentes personalizados para usar en la app

import { CardComponent } from './dashboards/card/card.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelsViewerComponent } from './personalized/models-viewer/models-viewer.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
    declarations : [
        CardComponent,
        ModelsViewerComponent,
    ],
    exports: [
        CardComponent,
        ModelsViewerComponent,
    ],
    //Importamos el modulo te Ionic para tener sus componentes disponibles
    // dentro de los componentes personalizados
    imports : [
        CommonModule,
        FormsModule,
        NgxMaskModule.forRoot(maskConfig),
        NgbModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
