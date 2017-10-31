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
      transition('visible => invisible', animate('100ms ease-in-out')),
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
      transition('visible => invisible', animate('100ms ease-in-out')),
      transition('invisible => visible', animate('300ms ease-in-out'))
    ]),
    trigger('bottomVisibility', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('invisible', style({
        transform: 'translate3d(0,100%,0)'
      })),
      transition('visible => invisible', animate('100ms ease-in-out')),
      transition('invisible => visible', animate('300ms ease-in-out'))
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

  toggleOverlay() {
    console.log("showOverlay",this.showOverlay);
    console.log("iconOverlay",this.iconOverlay);
    this.showOverlay = (this.showOverlay=='visible')?'invisible':'visible';
    this.iconOverlay = (this.iconOverlay=='arrow-back')?'arrow-forward':'arrow-back';
    this.showBottom = 'invisible';
    this.showShade = 'invisible';
    this.iconShade = 'arrow-down';
    this.iconBottom = 'arrow-up';
  }

  toggleBottom() {
    console.log("showBottom",this.showBottom);
    this.showBottom = (this.showBottom=='visible')?'invisible':'visible';
    this.iconBottom = (this.iconBottom=='arrow-down')?'arrow-up':'arrow-down';
    this.showOverlay = 'invisible';
    this.iconOverlay = 'arrow-back';
    this.showShade = 'invisible';
    this.iconShade = 'arrow-down';
  }

  toggleShade() {
    console.log("showShade",this.showShade);
    this.showShade = (this.showShade=='visible')?'invisible':'visible';
    this.iconShade = (this.iconShade=='arrow-up')?'arrow-down':'arrow-up';
    this.showOverlay = 'invisible';
    this.iconOverlay = 'arrow-back';
    this.showBottom = 'invisible';
    this.iconBottom = 'arrow-up';    
  }

  @ViewChild('pageSlider') pageSlider: Slides;
  tabs:any = '1';
  currentIndex:any = '1';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public element: ElementRef, 
    public renderer: Renderer, 
    public domCtrl: DomController    
  ) {}  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
    this.tabs = '1';
    this.currentIndex = '1';
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

  swipeLeftOverlayEvent(e){
    if ((e.direction) == 2) {
      console.log("swipe left",e.direction);
      this.toggleOverlay();
    }
  }

  swipeRightOverlayEvent(e){
    if ((e.direction) == 4) {
      console.log("swipe right",e.direction);
      this.toggleOverlay();
    }
  }

  swipeUpShadeEvent(e){
    if ((e.direction) == 8) {
      console.log("swipe up",e.direction);
      this.toggleShade();
    }
  }

  swipeDownBottomEvent(e){
    if ((e.direction) == 16) {
      console.log("swipe left",e.direction);
      this.toggleBottom();
    }
  }  

}