import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { FrontendGraphicComponentComponent } from "./frontend-graphic-component/frontend-graphic-component.component";
import { BackendGraphicComponentComponent } from "./backend-graphic-component/backend-graphic-component.component";
import { DatabaseGraphicComponentComponent } from "./database-graphic-component/database-graphic-component.component";
import { EchartsComponent } from "./echarts/echarts.component";

@NgModule({
    declarations: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
        EchartsComponent,
    ],
    exports: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
        EchartsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]
})
export class ComponentsModule {}
