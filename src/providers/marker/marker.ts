import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

declare var google;

@Injectable()
export class MarkerProvider {

  database = firebase.database();

  hotels:any = [];

  constructor() {
  }


  setMarker(map){
    firebase.database().ref('hotels').once('value').then((snapshot) => {
      snapshot.forEach(function(child) {
        console.log(child.val().lat)
          let marker = new google.maps.Marker({
            position: {lat: Number(child.val().lat), lng: Number(child.val().ing)},
            map: map,
            title: child.val().hotelname,
          });
      });
    });
  }
}
