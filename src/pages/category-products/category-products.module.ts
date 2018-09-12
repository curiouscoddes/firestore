import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryProductsPage } from './category-products';

@NgModule({
  declarations: [
    CategoryProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryProductsPage),
  ],
})
export class CategoryProductsPageModule {}
