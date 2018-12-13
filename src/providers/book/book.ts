import { Injectable } from '@angular/core';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  constructor() {
    console.log('Hello BookProvider Provider');
  }


  book(hotelId){
    console.log(hotelId);
  }

}
