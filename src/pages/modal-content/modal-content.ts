import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { BookProvider } from '../../providers/book/book';
import { HomePage } from '../home/home';
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
    public navController: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private bookService: BookProvider) {
  }

  ionViewDidLoad() {
      this.hotelName = this.navParams.get('hotelname');
      this.hotelPrice = this.navParams.get('price');
      this.hotelKey = this.navParams.get('key');
  }

  dismiss(data){
    this.viewCtrl.dismiss(data);
  }

  book(){
    // this.navController.push(HomePage);
    let data = { 'key': this.hotelKey };
    this.dismiss(data);
  }
  
}
