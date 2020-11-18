import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsTabs } from '../../framework/modules/us-tabs';
import { Consts } from '../../framework/utils/Consts';

@Component({
  selector: 'home-page-main',
  templateUrl: 'home-page-main.page.html',
  styleUrls: ['home-page-main.page.scss']
})
export class HomePageMainPage implements OnInit{

  public tabs:UsTabs[] = [
    {tabName:'全员学习',tabActive:Consts.TAB_ACTIVE,routePath:'tabs/tab1/allStaffLearning'},
    {tabName:'白领专区',tabActive:'',routePath:'tabs/tab1/whiteCollarZone'}
  ];
  constructor(
    // 路由器控制器
	  private router: Router,
    // 当前组件相关的路由器
    private activatedRoute: ActivatedRoute
    ) {
      this.activeRoute(this.tabs[0]);
  }
  ngOnInit(): void {
  }
  releaseTabs(){
    this.tabs.forEach(item=>{
      item.tabActive = '';
    });
  }
  chooeseTab(tab:UsTabs){
    this.releaseTabs();
    tab.tabActive = Consts.TAB_ACTIVE;
    this.activeRoute(tab);
  }
  activeRoute(tab:UsTabs) {
	  this.router.navigateByUrl(tab.routePath).finally();
	}

}
