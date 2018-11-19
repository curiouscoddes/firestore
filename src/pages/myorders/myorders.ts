import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderProvider}from '../../providers/order/order';
import { Order} from '../../models/order.model';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

/**
 * Generated class for the MyordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html',
})
export class MyordersPage {
  ordersIMade$: Observable<Order[]>;
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

                 this.ordersIMade$ = this.orderService.getOrdersIMade().valueChanges();
                  
                  console.log(this.user.id);
                  console.log(this.ordersIMade$)

                this.storage.get('userDetails')
                .then((data) => {
                  // this.user.id = data.id,
                  // this.user.name = data.name,
                  // this.user.profileImage = data.profileImage,
                  // this.user.occupation = data.occupation,
                  // this.user.description = data.description,
                  // this.user.email = data.email,
                  // this.user.status = data.status
                  // console.log(data.id);
                  // console.log(this.user.id);

                  
                });
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyordersPage');
  }

}
