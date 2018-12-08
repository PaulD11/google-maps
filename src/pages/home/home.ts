import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarkerProvider } from '../../providers/marker/marker';

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
    private markerService: MarkerProvider) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(48.050144, 8.201419);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.markerService.setMarker(this.map);
  }
}