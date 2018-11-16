import { SortPipe } from './../pipes/sort/sort';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { PipesModule } from './../pipes/pipes.module';
import { CategoriesPage } from './../pages/categories/categories';
import { ProductsPage } from './../pages/products/products';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';
import { CategoriesProvider } from '../providers/categories/categories';
import { AddProductPage } from '../pages/add-product/add-product';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath  } from '@ionic-native/file-path';
import { ProductProvider } from '../providers/product/product';
import { ChatProvider } from '../providers/chat/chat';
import { EmojiProvider } from '../providers/emoji/emoji';
import { MyProductsPage } from '../pages/my-products/my-products';
import { MapPage } from '../pages/map/map';
import { AgmCoreModule } from '@agm/core';
import { ChatsPage } from '../pages/chats/chats';
import { CartProvider } from '../providers/cart/cart';



@NgModule({
  declarations: [

    MyApp,
    CategoriesPage,
    HomePage,
    //AddProductPage,
    MyProductsPage,
    MapPage,
    //ProductsPage
    ChatsPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    PipesModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASWdknOqN7lncnpegbq0JtNdWzVkcU1ug'
    }),
    IonicStorageModule.forRoot({
      name:"__devapp",
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //AddProductPage,
    CategoriesPage,
    MyProductsPage,
    MapPage,
    ChatsPage
    //ProductsPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileChooser,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CategoriesProvider,
    ImghandlerProvider,
    ProductProvider,
    ChatProvider,
    EmojiProvider,
    CartProvider,
  ]
})
export class AppModule {}
