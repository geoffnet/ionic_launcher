import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

// create a class that overrides hammer default config
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }, // override default settings
    'pinch': { enable: false }, // disable pinch/rotate to enable vert swiping
    'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    MyApp,
    SwipeTabsPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SwipeTabsPage
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    // StatusBar,
    // SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
