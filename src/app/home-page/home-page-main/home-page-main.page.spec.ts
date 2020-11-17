import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomePageMainPage } from './home-page-main.page';

describe('HomePageMainPage', () => {
  let component: HomePageMainPage;
  let fixture: ComponentFixture<HomePageMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageMainPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
