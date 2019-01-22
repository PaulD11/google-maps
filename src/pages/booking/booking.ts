import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { BookProvider } from '../../providers/book/book';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
/**
 * Generated class for the ModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-content',
  templateUrl: 'booking.html',
})
export class BookingPage {

  hotelName:any;
  hotelPrice:any;
  hotelDate:any;
  hotelPlace:any;
  hotelKey:any;
  hotelTime:any;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private bookService: BookProvider,
    public alertCtrl: AlertController,
    private firebaseService: FirebaseProvider) {
  }

  ionViewDidLoad() {
      this.hotelName = this.navParams.get('hotelname');
      this.hotelPrice = this.navParams.get('price');
      this.hotelDate = this.navParams.get('date');
      this.hotelPlace=this.navParams.get('place');
      this.hotelKey = this.navParams.get('key');   
      this.hotelTime = this.navParams.get('time');
  }

  dismiss(data){
    this.viewCtrl.dismiss(data);
  }

  book(hotelName, hotelPlace, hotelPrice, hotelDate, hotelTime, firstname, lastname, iban){
    // this.navController.push(HomePage);
    let data = { 'key': this.hotelKey };
    this.dismiss(data);

  this.firebaseService.book(hotelName, hotelPlace, hotelPrice, hotelDate, hotelTime, firstname, lastname, iban);


    const alert = this.alertCtrl.create({
      title: 'Hotelbuchung',
      subTitle: 'Ihre Hotelbuchung war erfolgreich!',
      buttons: ['OK']
    });
    alert.present();
  }
  }



  




