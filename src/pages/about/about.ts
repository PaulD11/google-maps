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
    this.hotels = this.retrieveData();
  }

  retrieveData() {
    return firebase.database().ref('/hotels').once('value').then(function (snapshot) {
      var returnArr = [];
      snapshot.forEach(function(child) {
          var item = child.val();
          item.key = child.key;
  
          returnArr.push(item);
      });
      return returnArr;
    });
  }

  deleteData(key){
    this.firebaseService.deleteData(key);
  }

}
