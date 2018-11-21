import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  OrderItems: Observable<any[]>;
 OrderRef: AngularFireList<any> = this.db.list('Buchungen'); 

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {


  }
 getOrders(): Observable<any[]>{
    return this.OrderItems = this.OrderRef.snapshotChanges().map(changes => {
return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }); 

  }
}


