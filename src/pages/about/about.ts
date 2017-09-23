import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  endPonit = 'posts';
  posts: any;

  constructor(public navCtrl: NavController, private api: Api) {
    this.getPosts();
  }

  getPosts() {
    return this.api.get(this.endPonit).map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        console.log('data', res);
        this.posts = res;
        // if (res.status == 'success') {
        //   console.log('data', res)
          
        // } else {
        // }
      }, err => {
        console.error('ERROR', err);
      });

  }

}
