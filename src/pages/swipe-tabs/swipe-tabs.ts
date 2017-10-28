import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-swipe-tabs',
  templateUrl: 'swipe-tabs.html',
})

export class SwipeTabsPage {
  @ViewChild('pageSlider') pageSlider: Slides; 
  tabs: any = '0';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController
  ) {}  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Applications',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}