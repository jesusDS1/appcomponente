import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReordePageRoutingModule } from './list-reorde-routing.module';

import { ListReordePage } from './list-reorde.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReordePageRoutingModule,ComponentsModule
  ],
  declarations: [ListReordePage]
})
export class ListReordePageModule {}
