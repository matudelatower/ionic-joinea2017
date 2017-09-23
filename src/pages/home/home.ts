import { NoticiasPage } from './../noticias/noticias';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  saludo: string;
  saludazo: string;
  valor: any;
  arr: any[];

  constructor(public navCtrl: NavController) {
    this.saludo = 'hola';
    this.saludazo = 'chau';

    this.arr = [
      { 'nombre': 'Matias' },
      { 'nombre': 'Sergio' },
      { 'nombre': 'Cristian' },
      { 'nombre': 'Joinea' },
    ];
  }

  agregar() {
    console.log('click');

    this.arr.push({
      'nombre': this.valor
    });

    this.valor = '';

  }

  abrirNoticias(){
    this.navCtrl.push(NoticiasPage);
  }

}
