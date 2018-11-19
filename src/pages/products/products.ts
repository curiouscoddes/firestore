import { Observable } from 'rxjs';
import { Products } from './../../models/product.model';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from './../../providers/product/product';
import { ChatsPage } from '../chats/chats';
import * as firebase from 'firebase';
import { ChatProvider} from '../../providers/chat/chat'; 
import { AngularFirestore } from 'angularfire2/firestore';
import  'rxjs/add/operator/mergeMap';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {


  products$: Observable<Products[]>;
  chatuser;
  chatpartner: any;
  chatfellow;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public productService: ProductProvider, public chatService: ChatProvider,
              public afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  ngOnInit() {
    this.products$ =this.productService.getAllProducts(ref => ref);
    let userId = firebase.auth().currentUser.uid;
    this.afs.collection('userProfile', ref => ref.where('id', '==', userId).limit(1))
    .valueChanges().flatMap(result => result)
    .subscribe(val =>{
      let y = JSON.parse(JSON.stringify(val));
      console.log('This is the val:' + val);
      this.chatuser = val ;
      console.log( 'this is the chatuser' + JSON.stringify(this.chatuser))
    },
    (error) => {
      console.log('some error occurred somewhere!!' + error);
    },
    () => {
      console.log('completed!!')
    }

    )
  }
  addToCart() {
    
  }
  chatFarmer(chatpartner){
    console.log(chatpartner);
    //this.navCtrl.push(ChatsPage);
    this.afs.collection('userProfile', ref => ref.where('id', '==', chatpartner).limit(1))
    .valueChanges().flatMap(result => result).subscribe( val => {
      let y = JSON.parse(JSON.stringify(val));
      this.chatfellow = y;
      this.chatService.currentChatPairId = this.chatService.createPairId(
        this.chatuser,
        this.chatfellow
      );
      this.chatService.currentChatPartner = this.chatfellow;
    },
    (error) => {
      console.log(error)
    }, () => {console.log('complete!!')
    });
    console.log("this is the chatFellow" + JSON.stringify(this.chatfellow));
    console.log("this is the chatuser" + JSON.stringify(this.chatuser));
    this.navCtrl.push('ChatroomPage');
  }
  moreAboutProduct(product){
    this.navCtrl.push('ProductPage', {data:product})
    
  }
  

}
