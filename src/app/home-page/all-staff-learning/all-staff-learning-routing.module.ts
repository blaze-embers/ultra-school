import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStaffLearningComponent } from './all-staff-learning.component';

const routes: Routes = [
  {
    path: '',
    component: AllStaffLearningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllStaffLearningRoutingModule {}
