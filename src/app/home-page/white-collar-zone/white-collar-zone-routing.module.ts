import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhiteCollarZoneComponent } from './white-collar-zone.component';

const routes: Routes = [
  {
    path: '',
    component: WhiteCollarZoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhiteCollarZoneRoutingModule {}
