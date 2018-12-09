import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  productsRef: AngularFireList<any> = this.db.list('hotels');

 constructor(public alertCtrl: AlertController,
  public db: AngularFireDatabase,
) { }

addHotel(newName: string, newOrt: string, newprice: number, newdatum:number, newuhrzeit:number, newAnzahlzimmer:number) {
  this.productsRef.push({ hotelName: newName, hotelOrt: newOrt, hotelpreis: newprice, hotelDatum:newdatum, 
    hotelUhrzeiht: newuhrzeit, hotelZimmer : newAnzahlzimmer});
}


  showAlert() {
    const alert = this.alertCtrl.create({
      subTitle: 'Hotelzimmer wurde freigegeben',
      buttons: ['OK']
    });
    alert.present();
  }
}






