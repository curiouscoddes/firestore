import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyordersPage } from './myorders';

@NgModule({
  declarations: [
    MyordersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyordersPage),
  ],
})
export class MyordersPageModule {}
