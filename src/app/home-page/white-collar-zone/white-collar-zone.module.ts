import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WhiteCollarZoneComponent } from './white-collar-zone.component';
import { WhiteCollarZoneRoutingModule } from './white-collar-zone-routing.module';


@NgModule({
  imports: [ 
    IonicModule,
    CommonModule,
    FormsModule,
    WhiteCollarZoneRoutingModule
  ],
  declarations: [WhiteCollarZoneComponent],
})
export class WhiteCollarZoneModule {}
