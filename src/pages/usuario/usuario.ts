import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  usuario: any;
  username: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: Api) {

    // this.username = 'matudelatower';
    this.username = navParams.get('usuario');
    
    this.getUsuario(this.username.login);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  getUsuario(username: any) {

    let endpoint = 'users/' + username;

    this.api.get(endpoint).subscribe(
      (resultado) => {
        this.usuario = resultado.json();
      },
      err => {
        console.error(err);
      }
    );
  }

}
