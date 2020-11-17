import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageMainPage } from './home-page-main.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomePageMainRoutingModule } from './home-page-main-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageMainRoutingModule
  ],
  declarations: [HomePageMainPage]
})
export class HomePageMainModule {}
