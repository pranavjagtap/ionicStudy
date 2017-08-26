import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from "./user/user";

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  // NavController needs to be imported from ionic-angular inorder to link the pages.
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadUser(name: string) {
    // In order to pass on the data we can do it as second argument. which can be string, array, object or any other type.
    this.navCtrl.push(UserPage, {userName: name});
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UsersPage');
  // }

}
