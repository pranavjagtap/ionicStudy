import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {
  name: string;

  ngOnInit() {
    this.name = this.navParams.get('itemName');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToHomePage() {
    this.navCtrl.popToRoot();
  }

}
