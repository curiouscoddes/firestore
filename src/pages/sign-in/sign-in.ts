import { AuthProvider } from './../../providers/auth/auth';
import { Login } from './../../models/loginCreds';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  creds = {} as Login;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider) {
  }

  ionViewDidLoad() {
   
  }

  async login() {
    try{
      await this.authService.loginUser(this.creds);
      this.navCtrl.setRoot('ProductsPage');

    } catch(error) {
      console.log(error);
    }
  }

}
