import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  database = firebase.database();

  constructor() {
  }

  saveData(name) {
    let newHotelKey = firebase.database().ref().child('hotels').push().key;
    this.database.ref('/hotels/' + newHotelKey).set({
      hotelname: name,
    }, function (error) {
      if (error) {
        console.log("failed");
      } else {
        console.log("success");
      }
    });
  }

  retrieveData() {
    var hotelsRef = firebase.database().ref('/hotels/');
    return firebase.database().ref('/hotels/').once('value').then(function (snapshot) {
        console.log(snapshot)
    });
  }

}
