import { Component, Input } from '@angular/core';

/**
 * Generated class for the PruebaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'prueba',
  templateUrl: 'prueba.html'
})
export class PruebaComponent {

  @Input() texto: string;

  text: string;

  constructor() {
    console.log('Hello PruebaComponent Component');
    this.text = 'Hello World';
  }

}
