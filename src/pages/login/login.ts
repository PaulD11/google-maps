import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        this.navCtrl.setRoot(TabsPage);
      }).catch(() => {
        console.log("error");;
      })
  }

  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email.value, password.value)
      .then(() => {
        console.log("success");
      }).catch((error) => {
        console.log("error");
      })
  }

  forgotPassword(email) {
    firebase.auth().sendPasswordResetEmail(email);

  }
}
