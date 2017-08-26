import { Component, OnInit } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})

// OnInit is anguylar lifecycle hook
export class UserPage implements OnInit {
    // gets called before the template gets rendered, because we are reflecting the data on templates for now.
    // so its better to retrive the data at this point instead of retrieving
    //  the data in constructor (which might gets called when we push the Page to NavController). 
    ngOnInit() {
        this.name = this.navParams.get('userName');
    }
    name: string;

    // NavParams will allow us to retireve the data passed to this page while its been called. 
    constructor (private navParams: NavParams){

    }

}