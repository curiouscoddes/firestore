import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquireProductPage } from './enquire-product';

@NgModule({
  declarations: [
    EnquireProductPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquireProductPage),
  ],
})
export class EnquireProductPageModule {}
