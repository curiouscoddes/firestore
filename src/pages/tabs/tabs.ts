import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyordersPage } from '../../pages/myorders/myorders';
import * as firebase from 'firebase';
import { userProfile} from '../../models/userProfile';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: string = "ProductsPage";
  tab2: string = "OrderstomePage";
  tab3: string = "ChatsPage";
  // tab4: string = "MapPage";
  tab5: string = "ProfilePage";
  user;
  username: userProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
