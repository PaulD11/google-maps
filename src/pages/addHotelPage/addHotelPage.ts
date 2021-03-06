import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'addHotelPage.html'
})
export class AddHotelPage {
  hotels: any;
  hotel: string;

  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseProvider) {

  }

  saveData(name, place, price, date, time, amount, lat, Ing) {
    this.firebaseService.saveData(name, place, price, date, time, amount, lat, Ing);
    this.hotel = "";
  }

}








