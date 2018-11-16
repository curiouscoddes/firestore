import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  userdetails: any = {};

  constructor(public navCtrl: NavController, public storage: Storage, public authService: AuthProvider, public navParams: NavParams, public toastCtrl: ToastController, public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signup() {

   try{
     this.userdetails.time = new Date().getTime();

    this.authService.registerUser(this.userdetails).then(res => {
      // this.storage.set("AppUser",this.userdetails);
      this.navCtrl.setRoot('ProductsPage');
    });

   }catch(error){
     console.log(error);
   }

  }
  login(){
    this.navCtrl.setRoot("SignInPage");
  }

}
