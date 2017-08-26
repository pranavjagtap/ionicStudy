import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usersPage: UsersPage;

  // Constructor is injecting Navcontroller
  constructor(public navCtrl: NavController) {}

  onGoToUsers(){
    this.navCtrl.push(UsersPage);
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }
}
