import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import * as firebase from 'firebase';
import { hostElement } from '@angular/core/src/render3/instructions';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  hotels: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseProvider) {


  }

  ionViewDidLoad() {
    this.loadMap();
    this.hotels = this.retrieveData();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(48.050144, 8.201419);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  saveData() {
    this.firebaseService.saveData("Hotel Ritter");
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
}