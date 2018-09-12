import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  userdetails = {
    username:"",
    email: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public authService: AuthProvider, public navParams: NavParams, public toastCtrl: ToastController, public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signup() {

   try{

    this.authService.registerUser(this.userdetails);

   }catch(error){
     console.log(error);
   }

  }

}
