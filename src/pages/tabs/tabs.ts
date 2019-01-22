import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
import { AddHotelPage } from '../addHotelPage/addHotelPage';
import { ShowHotelPage } from '../showHotelPage/showHotelPage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  private user: firebase.User;
  isAdmin: boolean = false;
  tab1Root = HomePage;
  tab2Root = ShowHotelPage;
  tab3Root = AddHotelPage;

  constructor(private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
    this.checkIfAdmin();
  }
  signOut() {
    this.afAuth.auth.signOut()
    .then(() => {
      this.navCtrl.setRoot(LoginPage);
    }).catch(() => {
      console.log("error");;
    })
  }
  
  
  checkIfAdmin() {
    firebase.database().ref('/admin').once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        let item = child.val();
        if (this.user) {
          this.user.email  == item.name ? this.isAdmin = true : this.isAdmin = false;
        }
      });
    });
  }
}
