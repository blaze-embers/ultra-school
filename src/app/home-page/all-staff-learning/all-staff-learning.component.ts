import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UsBtn } from 'src/app/framework/modules/us-btn';

@Component({
  selector: 'app-all-staff-learning',
  templateUrl: './all-staff-learning.component.html',
  styleUrls: ['./all-staff-learning.component.scss'],
})
export class AllStaffLearningComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    private element: ElementRef
    ) { }
  btns:UsBtn[] = [
    {title:'通用课程',iconPath:'../../../assets/img/home-page/11-17-52.png',routePath:''},
    {title:'知识库',iconPath:'../../../assets/img/home-page/11-18-00.png',routePath:''},
    {title:'学习班级',iconPath:'../../../assets/img/home-page/11-18-05.png',routePath:''},
    {title:'学习任务',iconPath:'../../../assets/img/home-page/11-18-32.png',routePath:''},
    {title:'考试',iconPath:'../../../assets/img/home-page/11-18-42.png',routePath:''},
    {title:'打卡日历',iconPath:'../../../assets/img/home-page/11-18-45.png',routePath:''},
    {title:'话题讨论',iconPath:'../../../assets/img/home-page/11-18-23.png',routePath:''},
    {title:'活动报名',iconPath:'../../../assets/img/home-page/11-18-12.png',routePath:''},
    {title:'党团课',iconPath:'../../../assets/img/home-page/11-18-19.png',routePath:''},
    {title:'问卷',iconPath:'../../../assets/img/home-page/11-18-38.png',routePath:''}
  ]
  ngOnInit() {}
  ngAfterViewInit() {
    // 修改返回按钮中文本的样式
    const ionBackButton = this.element.nativeElement.querySelector('.search-item');
    console.log('工作',ionBackButton);
    const styleSheet = `
        .item-inner {
            border:0px solid #FFF;
        }
    `;
    this.injectStyleToShadowRoot(this.renderer2, ionBackButton, styleSheet);
}

/**
 * 注入CSS样式到目标元素的ShadowRoot中
 * @param renderer 渲染器
 * @param element 目标元素
 * @param styleSheet CSS样式
 */
injectStyleToShadowRoot(renderer: Renderer2, element: HTMLElement, styleSheet: string): void {
    const style = renderer.createElement('style');
    style.innerHTML = styleSheet;
    element.shadowRoot.appendChild(style);
}

}
