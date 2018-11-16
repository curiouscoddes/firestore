import { CategoriesPage } from './../pages/categories/categories';
import { ProductsPage } from './../pages/products/products';
import { AddProductPage } from './../pages/add-product/add-product';
import { MapPage} from './../pages/map/map';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyProductsPage} from '../pages/my-products/my-products';
import { timer } from 'rxjs';
import { ChatsPage } from '../pages/chats/chats';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "SignInPage";

  pages: Array<{ title: string, component: any}>;
  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
     // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage }, 
      { title: 'Filter by Category', component: CategoriesPage},
      { title: 'AddProduct',component: MyProductsPage },
      { title: 'Products', component: ProductsPage},
      { title: 'Chats', component: ChatsPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=> this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
