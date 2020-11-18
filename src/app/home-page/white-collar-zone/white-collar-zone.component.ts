import { Component, OnInit } from '@angular/core';
import { UsBtn } from 'src/app/framework/modules/us-btn';

@Component({
  selector: 'app-white-collar-zone',
  templateUrl: './white-collar-zone.component.html',
  styleUrls: ['./white-collar-zone.component.scss'],
})
export class WhiteCollarZoneComponent implements OnInit {

  constructor() { }
  btns:UsBtn[] = [
    {title:'微课',iconPath:'tv-outline',routePath:''},
    {title:'音频',iconPath:'headset-outline',routePath:''},
    {title:'视频',iconPath:'videocam-outline',routePath:''},
    {title:'文档',iconPath:'folder-outline',routePath:''},
    {title:'纯文稿',iconPath:'document-text-outline',routePath:''},
    {title:'H5链接',iconPath:'logo-html5',routePath:''}
  ];
  ngOnInit() {}

}
