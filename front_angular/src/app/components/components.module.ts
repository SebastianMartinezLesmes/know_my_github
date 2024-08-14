import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { NgxEchartsModule } from 'ngx-echarts'; // Import NgxEchartsModule

import { FrontendGraphicComponentComponent } from "./frontend-graphic-component/frontend-graphic-component.component";
import { BackendGraphicComponentComponent } from "./backend-graphic-component/backend-graphic-component.component";
import { DatabaseGraphicComponentComponent } from "./database-graphic-component/database-graphic-component.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { CircleDataComponent } from "./circle-data/circle-data.component";
import { BarDataComponent } from './bar-data/bar-data.component';

@NgModule({
    declarations: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
        EchartsComponent,
        CircleDataComponent,
        BarDataComponent,
    ],
    exports: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
        EchartsComponent,
        CircleDataComponent,
        BarDataComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        NgxEchartsModule.forRoot({ echarts: () => import('echarts') }) // Import NgxEchartsModule
    ]
})
export class ComponentsModule {}
