import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { FrontendGraphicComponentComponent } from "./frontend-graphic-component/frontend-graphic-component.component";
import { BackendGraphicComponentComponent } from "./backend-graphic-component/backend-graphic-component.component";
import { DatabaseGraphicComponentComponent } from "./database-graphic-component/database-graphic-component.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { CircleDataComponent } from "./circle-data/circle-data.component"

@NgModule({
    declarations: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
        EchartsComponent,
        CircleDataComponent,
    ],
    exports: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
        EchartsComponent,
        CircleDataComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]
})
export class ComponentsModule {}
