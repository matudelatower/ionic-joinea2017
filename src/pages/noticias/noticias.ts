import { UsuarioPage } from './../usuario/usuario';
import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  usuarios: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: Api,
    private barcodeScanner: BarcodeScanner) {

    this.getUsers();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  getUsers() {
    this.api.get('users').subscribe(
      (resultado) => {
        this.usuarios = resultado.json();
      },
      err => {
        console.error(err);
      }
    );
  }

  verUsuario(usuario) {

    this.navCtrl.push(UsuarioPage, {
      'usuario': usuario,
    });

  }

  escanear() {
    this.barcodeScanner.scan(
      { resultDisplayDuration: 0 }
    ).then(
      (barcodeData) => {
        if (!barcodeData.cancelled) {
          let usuario = {
            'login': barcodeData.text
          }
          this.verUsuario(usuario);
        }
        // Success! Barcode data is here
      }, (err) => {
        // An error occurred
      });
  }


}
