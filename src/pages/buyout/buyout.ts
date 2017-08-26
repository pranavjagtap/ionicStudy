import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {
  productData: {name:string, quantity: number};

  ngOnInit() {
    this.productData = this.navParams.data;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onConfirmPurchase() {
    // We cannot pass data while using pop out functionality.
    // For this we need to use angular services, which we will add later.
    this.navCtrl.popToRoot();
  }

}
