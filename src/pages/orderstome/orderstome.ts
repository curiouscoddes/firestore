import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OrderProvider } from '../../providers/order/order';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.model';
import * as firebase from 'firebase';


/**
 * Generated class for the OrderstomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderstome',
  templateUrl: 'orderstome.html',
})
export class OrderstomePage {
  ordersMadeToMe$: Observable<Order[]>;
   
  user = {
    id: '',
    name:'',
    profileImage: '',
    occupation: '',
    description: '',
    email: '',
    status: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private orderService: OrderProvider, public storage: Storage) {
                this.user.id = firebase.auth().currentUser.uid;
                this.ordersMadeToMe$ = this.orderService.getOrdersMadeToMe(this.user.id).valueChanges();

                this.storage.get('userDetails').then((data) => {
                  // this.user.id = data.id,
                  // this.user.name = data.name,
                  // this.user.profileImage = data.profileImage,
                  // this.user.occupation = data.occupation,
                  // this.user.description = data.description,
                  // this.user.email = data.email,
                  // this.user.status = data.status

                  // console.log(data.id);
                  // console.log(this.user.id);
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderstomePage');
  }

}
