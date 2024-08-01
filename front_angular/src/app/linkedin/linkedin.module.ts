import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkedinPageRoutingModule } from './linkedin-routing.module';

import { LinkedinPage } from './linkedin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkedinPageRoutingModule
  ],
  declarations: [LinkedinPage]
})
export class LinkedinPageModule {}
