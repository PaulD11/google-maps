import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

  database = firebase.database();

  constructor() {
  }

  saveData(name, place, price, date, time, amount, lat, Ing) {
    let newHotelKey = firebase.database().ref().child('hotels').push().key;
    this.database.ref('/hotels/' + newHotelKey).set({
      hotelname: name,
      place: place,
      price: price,
      date: date,
      time: time,
      amount: amount,
      lat: lat,
      ing: Ing,
    }, function (error) {
      if (error) {
        console.log("failed");
      } else {
        console.log("success");
      }
    });
  }

  deleteData(key){
    this.database.ref('/hotels/'+ key).remove();
  }

}
