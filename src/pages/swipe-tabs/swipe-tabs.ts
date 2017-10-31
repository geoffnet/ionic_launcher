import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, NavParams, Slides, DomController } from 'ionic-angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations/';

@Component({
  selector: 'page-swipe-tabs',
  templateUrl: 'swipe-tabs.html',
  animations: [
    trigger('shadeVisibility', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('invisible', style({
        transform: 'translate3d(0,-100%,0)'
      })),
      transition('visible => invisible', animate('200ms ease-in-out')),
      transition('invisible => visible', animate('300ms ease-in-out'))      
      // transition('* => *', animate('400ms ease-in-out'))
    ]),
    trigger('overlayVisibility', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('invisible', style({
        transform: 'translate3d(100%,0,0)'
      })),
      transition('visible => invisible', animate('200ms ease-in-out')),
      transition('invisible => visible', animate('300ms ease-in-out'))
    ]),
    trigger('bottomVisibility', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('invisible', style({
        transform: 'translate3d(0,100%,0)'
      })),
      transition('visible => invisible', animate('200ms ease-in-out')),
      transition('invisible => visible', animate('300ms ease-in-out'))
    ]),
    trigger('notificationVisibility', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('invisible', style({
        transform: 'translate3d(-100%,0,0)'
      })),
      transition('visible => invisible', animate('120ms ease-in-out'))
    ]),    
  ]

})

export class SwipeTabsPage {

  showOverlay = 'invisible';
  showBottom = 'invisible';
  showShade = 'invisible';
  iconOverlay = 'arrow-back';
  iconShade = 'arrow-down';
  iconBottom = 'arrow-up';
  showNotification = 'visible';

  items: any[];

  toggleOverlay() {
    this.showOverlay = (this.showOverlay=='visible')?'invisible':'visible';
    this.iconOverlay = (this.iconOverlay=='arrow-back')?'arrow-forward':'arrow-back';
    this.showBottom = 'invisible';
    this.showShade = 'invisible';
    this.iconShade = 'arrow-down';
    this.iconBottom = 'arrow-up';
    console.log("showOverlay",this.showOverlay);
    console.log("iconOverlay",this.iconOverlay);    
  }

  toggleBottom() {
    this.showBottom = (this.showBottom=='visible')?'invisible':'visible';
    this.iconBottom = (this.iconBottom=='arrow-down')?'arrow-up':'arrow-down';
    this.showOverlay = 'invisible';
    this.iconOverlay = 'arrow-back';
    this.showShade = 'invisible';
    this.iconShade = 'arrow-down';
    console.log("showBottom",this.showBottom);
  }

  toggleShade() {
    this.showShade = (this.showShade=='visible')?'invisible':'visible';
    this.iconShade = (this.iconShade=='arrow-up')?'arrow-down':'arrow-up';
    this.showOverlay = 'invisible';
    this.iconOverlay = 'arrow-back';
    this.showBottom = 'invisible';
    this.iconBottom = 'arrow-up';    
    console.log("showShade",this.showShade);
  }

  @ViewChild('pageSlider') pageSlider: Slides;
  tabs:any = '1';
  apps:any;
  currentIndex:any = '0';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public element: ElementRef, 
    public renderer: Renderer, 
    public domCtrl: DomController
  ) {

    this.items = [];

    for (let i=0; i < 8; i++) {
      this.items.push({
        name: 'Item '+ i,
        showNotification: 'visible'
      });
    }

    this.apps = [];
    
    for (let i=0; i < 8; i++) {
      this.apps.push({
        name: 'App '+ i
      });
    }
    
  }

  removeNotification(item) {
    console.log("item swiped", item);
    item.showNotification = 'invisible';
    let items = this.items;
    let index = items.indexOf(item);    
    setTimeout(function(){
      console.log('index:',index);
      if(index > -1){
        items.splice(index, 1);
      }
    }, 150);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
    this.tabs = '1';
    this.currentIndex = '0';
  }

  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

	slideChanged($event) {
		let currentIndex = this.pageSlider.getActiveIndex();
		let tabs = currentIndex;
		console.log('Current index is', currentIndex);
    console.log('Current tab is', tabs);
    this.tabs = $event._snapIndex.toString();    
	}

}