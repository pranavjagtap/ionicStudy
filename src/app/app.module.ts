import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/users/user/user';
import { ShopPage } from '../pages/shop/shop';
import { BuyoutPage } from '../pages/buyout/buyout';

@NgModule({
  // Declare our component.
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    ShopPage,
    BuyoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  // ionic starts with its own IonicApp
  bootstrap: [IonicApp],
  // Tell Ionic to create compomemt factory for us.
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    ShopPage,
    BuyoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
