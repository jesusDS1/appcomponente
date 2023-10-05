import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AletrPage } from './aletr.page';

const routes: Routes = [
  {
    path: '',
    component: AletrPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AletrPageRoutingModule {}
