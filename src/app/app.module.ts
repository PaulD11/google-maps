import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Modal } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../environment/environment';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { MarkerProvider } from '../providers/marker/marker';
import { BookProvider } from '../providers/book/book';
import { AddHotelPage } from '../pages/addHotelPage/addHotelPage';
import { ShowHotelPage } from '../pages/showHotelPage/showHotelPage';
import { BookingPage } from '../pages/booking/booking';

@NgModule({
  declarations: [
    MyApp,
    ShowHotelPage,
    AddHotelPage,
    HomePage,
    TabsPage,
    LoginPage,
    BookingPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.BAM),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShowHotelPage,
    AddHotelPage,
    HomePage,
    TabsPage,
    LoginPage,
    BookingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    MarkerProvider,
    BookProvider
  ]
})
export class AppModule {}
