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
    trigger('notificationSwipedLeft', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('swipedLeft', style({
        transform: 'translate3d(-100%,0,0)'
      })),
      transition('visible => swipedLeft', animate('120ms ease-in-out'))
    ]),
    trigger('notificationSwipedRight', [
      state('visible', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('swipedRight', style({
        transform: 'translate3d(100%,0,0)'
      })),
      transition('visible => swipedRight', animate('120ms ease-in-out'))
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
  tabs:any = '2';
  apps:any;
  currentIndex:any = '1';

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

    this.apps = [
      {
        name: 'airbnb',
        imagePath: '../../assets/icon/app_airbnb.png',
      },
      {
        name: 'browser',
        imagePath: '../../assets/icon/app_browser.png',        
      },
      {
        name: 'calculator',
        imagePath: '../../assets/icon/app_calculator.png',
      },
      {
        name: 'calendar',
        imagePath: '../../assets/icon/app_calendar.png',
      },
      {
        name: 'camera',
        imagePath: '../../assets/icon/app_camera.png',
      },
      {
        name: 'clock',
        imagePath: '../../assets/icon/app_clock.png',
      },
      {
        name: 'contacts',
        imagePath: '../../assets/icon/app_contacts.png',
      },
      {
        name: 'download',
        imagePath: '../../assets/icon/app_download.png',
      },
      {
        name: 'email',
        imagePath: '../../assets/icon/app_email.png',
      },
      {
        name: 'facebook',
        imagePath: '../../assets/icon/app_facebook.png',
      },
      {
        name: 'files',
        imagePath: '../../assets/icon/app_files.png',
      },
      {
        name: 'galaxy apps',
        imagePath: '../../assets/icon/app_galaxy_apps.png',
      },
      {
        name: 'gallery',
        imagePath: '../../assets/icon/app_gallery.png',
      },
      {
        name: 'gmail',
        imagePath: '../../assets/icon/app_gmail.png',
      },
      {
        name: 'messages',
        imagePath: '../../assets/icon/app_messages.png',
      },
      {
        name: 'messenger',
        imagePath: '../../assets/icon/app_messenger.png',
      },
      {
        name: 'note',
        imagePath: '../../assets/icon/app_note.png',
      },
      {
        name: 'phone',
        imagePath: '../../assets/icon/app_phone.png',
      },
      {
        name: 'reminder',
        imagePath: '../../assets/icon/app_reminder.png',
      },
      {
        name: 'samsung_health',
        imagePath: '../../assets/icon/app_samsung_health.png',
      },
      {
        name: 'settings',
        imagePath: '../../assets/icon/app_settings.png',
      },
      {
        name: 'settings',
        imagePath: '../../assets/icon/app_settings.png',
      },
      {
        name: 'slack',
        imagePath: '../../assets/icon/app_slack.png',
      },
      {
        name: 'smart_manager',
        imagePath: '../../assets/icon/app_smart_manager.png',
      },
      {
        name: 'smart_switch',
        imagePath: '../../assets/icon/app_smart_switch.png',
      },
      {
        name: 'spotify',
        imagePath: '../../assets/icon/app_spotify.png',
      },
      {
        name: 'translater',
        imagePath: '../../assets/icon/app_translater.png',
      },
      {
        name: 'twitter',
        imagePath: '../../assets/icon/app_twitter.png',
      },
      {
        name: 'videos',
        imagePath: '../../assets/icon/app_videos.png',
      },
      {
        name: 'voice_recorder',
        imagePath: '../../assets/icon/app_voice_recorder.png',
      },
      {
        name: 'weather',
        imagePath: '../../assets/icon/app_weather.png',
      }
    ];
    
    // for (let i=0; i < 8; i++) {
    //   this.apps.push({
    //     name: 'App '+ i
    //   });
    // }
    
  }

  swipeNotification(e,item){
    if ((e.direction) == 2) {
      console.log("swipe left",e.direction);
      item.showNotification = 'swipedLeft';
    };
    if ((e.direction) == 4) {
      console.log("swipe right",e.direction);
      item.showNotification = 'swipedRight';      
    };
    if ((e.direction) == 2 || (e.direction) == 4) {
      let items = this.items;
      let index = items.indexOf(item);    
      setTimeout(function(){
        console.log('index:',index);
        if(index > -1){
          items.splice(index, 1);
        }
      }, 150);
    }
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