import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  private user: firebase.User;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private afAuth: AngularFireAuth,
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
