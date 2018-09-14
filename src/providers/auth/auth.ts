import { Login } from './../../models/loginCreds';
import { userProfile } from './../../models/userProfile';
import { AngularFirestoreCollection,AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {


  constructor(public afireauth: AngularFireAuth, public afs: AngularFirestore) {
    
  }

  async registerUser(user): Promise<any> {
    //try catch statement
    try {
    const credentials: firebase.auth.UserCredential = await this.afireauth.auth
    .createUserWithEmailAndPassword(
      user.email,
      user.password
    );

    const userProfileDocument: AngularFirestoreDocument<
    userProfile
    > = this.afs.doc(`userProfile/${credentials.user.uid}`);

    //populate the document with user data
    await userProfileDocument.set({
      id: credentials.user.uid,
      email: user.email,
      username: user.username,
      time: user.time
    });
  } catch (error){
    console.error(error);
  }
  }

  async loginUser(Login): Promise<firebase.auth.UserCredential>{
    return this.afireauth.auth.signInWithEmailAndPassword(Login.email,Login.password);
  }

  //query for user details

  getLoggedInUser(): AngularFirestoreCollection<userProfile> {
    
    return this.afs.collection<userProfile>('userProfile',
    ref => 
      ref
        .where('id', '==',firebase.auth().currentUser.uid)
    );
  }
}
