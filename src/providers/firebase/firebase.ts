import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

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
    return firebase.database().ref('hotels').once('value').then((snapshot) => {
      let hotelData = [];
      snapshot.forEach(function(child) {
          let item = child.val();
          item.key = child.key;
          hotelData.push(item);
      });
      return hotelData;
    });
  }

}
