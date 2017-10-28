import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-swipe-tabs',
  templateUrl: 'swipe-tabs.html',
})

export class SwipeTabsPage {
  @ViewChild('pageSlider') pageSlider: Slides; 
  tabs: any = '0';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }
}