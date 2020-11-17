import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageMainPage } from './home-page-main.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageMainPage,
    children: [
      {
        path: 'allStaffLearning',
        loadChildren: () => import('../all-staff-learning/all-staff-learning.module').then(m => m.AllStaffLearningModule)
      },
      {
        path: 'whiteCollarZone',
        loadChildren: () => import('../white-collar-zone/white-collar-zone.module').then(m => m.WhiteCollarZoneModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageMainRoutingModule {}
