import { AngularFirestore } from 'angularfire2/firestore';
import { userProfile } from './../../models/userProfile';
import { CategoriesPage } from './../categories/categories';
import { AuthProvider } from './../../providers/auth/auth';
import { Login } from './../../models/loginCreds';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
 
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
  signedInUser;
  constructor(public navCtrl: NavController, public afs: AngularFirestore, public storage: Storage, public navParams: NavParams, public authService: AuthProvider) {
  }

  ionViewDidLoad() {
   
  }

   async login() {
     try{
      await this.authService.loginUser(this.creds);
    //   .then(res =>{

    //    this.signedInUser = this.afs.collection<userProfile>('userProfile',
    //      ref => 
    //        ref
    //          .where('email', '==',this.creds.email)
       
    //      );

    //      this.storage.set("AppUser",this.signedInUser);
    // });

     this.navCtrl.setRoot("ChatsPage");

    } catch(error) {
     console.log(error);
 
  }
 }
  

  signUpPage(){
    this.navCtrl.setRoot("SignUpPage");
  }

}
