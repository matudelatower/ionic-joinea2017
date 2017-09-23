import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: Api) {

  }

  getUsers() {
    this.api.get('users').subscribe(
      (res) => {
        this.usuarios = res.json();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

}
