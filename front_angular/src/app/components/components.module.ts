import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { FrontendGraphicComponentComponent } from "./frontend-graphic-component/frontend-graphic-component.component";

@NgModule({
    declarations: [
        FrontendGraphicComponentComponent,
    ],
    exports: [
        FrontendGraphicComponentComponent,
    ],
    imports: [
        CommonModule,
        IonicModule, // Include IonicModule here
    ]
})
export class ComponentsModule {}
