import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
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

  signOut() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.navCtrl.setRoot(LoginPage);
      }).catch(() => {
        console.log("error");;
      })

}
}
