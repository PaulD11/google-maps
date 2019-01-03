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

  book(hotelName, hotelPlace, hotelDate, hotelPrice, hotelTime, firstname, lastname, iban){
    let newBookKey = firebase.database().ref().child('booking').push().key;
    this.database.ref('/booking/' + newBookKey).set({
      name: hotelName,
      place: hotelPlace,
      price: hotelPrice,
      date: hotelDate,
      time: hotelTime,
      firstname: firstname,
      lastname: lastname,
      iban: iban,
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
