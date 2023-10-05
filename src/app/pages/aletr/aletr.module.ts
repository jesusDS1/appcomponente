import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AletrPageRoutingModule } from './aletr-routing.module';

import { AletrPage } from './aletr.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AletrPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AletrPage],
})
export class AletrPageModule {}
