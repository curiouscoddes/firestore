import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderstomePage } from './orderstome';

@NgModule({
  declarations: [
    OrderstomePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderstomePage),
  ],
})
export class OrderstomePageModule {}
