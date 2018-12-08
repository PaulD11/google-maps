import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  hotels: any;
  hotel: string;

  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseProvider) {

  }

  ionViewDidLoad(){
    this.hotels = this.firebaseService.retrieveData();
    console.log(this.hotels.__zone_symbol__value);
  }

  saveData(hotel) {
    this.firebaseService.saveData(hotel);
    this.hotels = this.firebaseService.retrieveData();
    this.hotel = "";
  }
}
