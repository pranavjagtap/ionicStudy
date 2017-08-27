import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage implements OnInit {
  quoteGroup: {
    category: string;
    quotes: Quote[];
    icon: string;
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
    /**
     * No need to use elvis operator (?) when we are fetching and
     * rendering data to template. Because ngOnInit() method gets called
     * before template is rendered and ionViewDidLoad() function gets
     * called after template is rendered.
     */
  }
  constructor(private navParams: NavParams) {
    // console.log("navParams.data  " + JSON.stringify(navParams.data));
    // this.quoteGroup = navParams.data;
  }

/**
 * But for now we will be going to use the OnInit method to
 * render the data to quotes.html.
 */

  // // Istead of saving data using constructor we are using life cycle method.
  // // But our template will get created before ionViewDidLoad will get called.
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   // console.log('this.quoteGroup');
  //   // console.log(JSON.stringify(this.quoteGroup));

  //   /*
  //     Note:
  //       Add elvis operator (?) in template to use this approach.
  //   */
  // }

}
