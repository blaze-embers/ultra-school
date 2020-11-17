import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllStaffLearningComponent } from './all-staff-learning.component';
import { AllStaffLearningRoutingModule } from './all-staff-learning-routing.module';

@NgModule({
  imports: [ 
    IonicModule,
    CommonModule,
    FormsModule,
    AllStaffLearningRoutingModule
  ],
  declarations: [AllStaffLearningComponent]
})
export class AllStaffLearningModule {}
