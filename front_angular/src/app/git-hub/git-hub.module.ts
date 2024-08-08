import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitHubPageRoutingModule } from './git-hub-routing.module';

import { GitHubPage } from './git-hub.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitHubPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GitHubPage]
})
export class GitHubPageModule {}
