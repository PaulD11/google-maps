import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BookProvider } from '../book/book';
import { ModalController, Modal } from 'ionic-angular';
import { ModalContentPage } from '../../pages/modal-content/modal-content';

declare var google;

@Injectable()
export class MarkerProvider {

  database = firebase.database();

  hotels:any;
  modal:any;

  constructor(
    private bookService: BookProvider,
    public modalCtrl: ModalController) {
  }


  setMarker(map){
    let markerProvider = new MarkerProvider(this.bookService, this.modalCtrl);
    firebase.database().ref('hotels').once('value').then((snapshot) => {
      snapshot.forEach(function(child) {
          let marker = new google.maps.Marker({
            position: {lat: Number(child.val().lat), lng: Number(child.val().ing)},
            map: map,
            title: child.val().hotelname,
          });
          let hotel = {
            "hotelname": child.val().hotelname,
            "key": child.key,
            "price": child.val().price
          };
          marker.addListener('click', function() {
            let modal = markerProvider.modalCtrl.create(ModalContentPage, hotel);
            modal.present();
          });
      });
    });
  }
}

