import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  //entrycomponents:[
//PopinfoComponent
 // ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
