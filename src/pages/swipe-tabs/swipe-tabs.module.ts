import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeTabsPage } from './swipe-tabs';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SwipeTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SwipeTabsPage),
  ],
})
export class SwipeTabsPageModule {}
