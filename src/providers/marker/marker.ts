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
          let marker = new google.maps.Marker({
            position: {lat: child.val().lat, lng: child.val().lng},
            map: map,
            title: child.val().hotelname,
          });
      });
    });
  }
}
