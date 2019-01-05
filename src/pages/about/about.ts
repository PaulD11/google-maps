import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import * as firebase from 'firebase';

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
    setTimeout(() =>{
      this.hotels = this.retrieveData();
      console.log(this.hotels)
    },500);
  }

  retrieveData() {
    return firebase.database().ref('/hotels').once('value').then(function (snapshot) {
      let hotels = [];
      snapshot.forEach(function(child) {
          var item = child.val();
          item.key = child.key;
          hotels.push(item);
      });
      return hotels;
    });
  }

  deleteData(key){
    this.firebaseService.deleteData(key);
  }

}
