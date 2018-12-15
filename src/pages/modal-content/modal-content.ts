import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the ModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {

  hotelName: any;
  hotelPrice:any;
  hotelKey:any;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
      this.hotelName = this.navParams.get('hotelname');
      this.hotelPrice = this.navParams.get('price');
      this.hotelKey = this.navParams.get('key');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  
}
