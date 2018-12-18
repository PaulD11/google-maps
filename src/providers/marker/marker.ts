import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BookProvider } from '../book/book';
import { ModalController, Modal } from 'ionic-angular';
import { ModalContentPage } from '../../pages/modal-content/modal-content';

declare var google;

@Injectable()
export class MarkerProvider {

  database = firebase.database();

  hotels:any;
  modal:any;

  constructor(
    private bookService: BookProvider,
    public modalCtrl: ModalController) {
  }



}

