import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BookProvider } from '../book/book';

declare var google;

@Injectable()
export class MarkerProvider {

  database = firebase.database();

  hotels:any = [];

  constructor(private bookService: BookProvider) {
  }


  setMarker(map){

    let markerProvider = new MarkerProvider(this.bookService);
    firebase.database().ref('hotels').once('value').then((snapshot) => {
      snapshot.forEach(function(child) {
          let marker = new google.maps.Marker({
            position: {lat: Number(child.val().lat), lng: Number(child.val().ing)},
            map: map,
            title: child.val().hotelname,
          });
          marker.addListener('click', function() {
            markerProvider.bookService.book(child.key);
          });
      });
    });
  }
}
