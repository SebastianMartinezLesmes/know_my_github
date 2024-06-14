import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { FrontendGraphicComponentComponent } from "./frontend-graphic-component/frontend-graphic-component.component";
import { BackendGraphicComponentComponent } from "./backend-graphic-component/backend-graphic-component.component";
import { DatabaseGraphicComponentComponent } from "./database-graphic-component/database-graphic-component.component";

@NgModule({
    declarations: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
    ],
    exports: [
        FrontendGraphicComponentComponent,
        BackendGraphicComponentComponent,
        DatabaseGraphicComponentComponent,
    ],
    imports: [
        CommonModule,
        IonicModule, // Include IonicModule here
    ]
})
export class ComponentsModule {}
