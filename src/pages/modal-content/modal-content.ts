import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  key: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.key = this.navParams.get('key');
    console.log('ionViewDidLoad ModalContentPage', this.key);
  }

}
