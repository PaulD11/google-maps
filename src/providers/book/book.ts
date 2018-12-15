import { Injectable } from '@angular/core';
import { FirebaseProvider } from '../firebase/firebase';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  constructor(
    private firebaseService: FirebaseProvider
  ) {}


  book(hotelId){
    this.firebaseService.deleteData(hotelId);
  }

}
