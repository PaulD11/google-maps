import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MarkerProvider } from '../../providers/marker/marker';
import { BookProvider } from '../../providers/book/book';
import { ModalContentPage } from '../modal-content/modal-content';
import * as firebase from 'firebase';
import { FirebaseProvider } from '../../providers/firebase/firebase';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  database = firebase.database();


  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseProvider,
    private bookService: BookProvider,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    setTimeout(() => {
      let latLng = new google.maps.LatLng(48.050144, 8.201419);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.setMarker(this.map);
    }, 500);

  }

  setMarker(map) {
    let markerProvider = new MarkerProvider(this.bookService, this.modalCtrl);
    let homeProvider = new HomePage(this.navCtrl, this.firebaseService, this.bookService, this.modalCtrl);
    firebase.database().ref('hotels').once('value').then((snapshot) => {
      snapshot.forEach(function (child) {
        let marker = new google.maps.Marker({
          position: { lat: Number(child.val().lat), lng: Number(child.val().ing) },
          map: map,
          title: child.val().hotelname,
        });
        let hotel = {
          "hotelname": child.val().hotelname,
          "key": child.key,
          "price": child.val().price,
          "date": child.val().date,
          "place": child.val().place,
          "time": child.val().time
        };
        marker.addListener('click', function () {
          let modal = markerProvider.modalCtrl.create(ModalContentPage, hotel);
          modal.present();
            modal.onDidDismiss((data) => {
              if(data){
                homeProvider.firebaseService.deleteData(data.key);
              }
              homeProvider.navCtrl.setRoot(homeProvider.navCtrl.getActive().component);
            });
        });
      });
    });
  }
}