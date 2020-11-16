import { Component, OnInit } from '@angular/core';
import { UsTabs } from '../framework/modules/us-tabs';
import { Consts } from '../framework/utils/Consts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public tabs:UsTabs[] = [
    {tabName:'全员学习',tabActive:''},
    {tabName:'白领专区',tabActive:Consts.TAB_ACTIVE}
  ];
  constructor() {}
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
  }


}
