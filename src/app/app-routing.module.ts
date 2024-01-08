import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent as ProductAppComponent } from "projects/product-listing/src/app/app.component";
import { AppComponent as ShoppingAppComponent } from "projects/shopping-carts/src/app/app.component";


const routes: Routes = [
  { 
    path: 'product-listing', 
    component: ProductAppComponent,
    loadChildren: () => import('projects/product-listing/src/app/product.module').then(m => m.ProductModule)},
  { 
    path: 'shopping-cart', 
    component: ShoppingAppComponent,
    loadChildren: () => import('projects/shopping-carts/src/app/shopping.module').then(m => m.ShoppingModule) },
  {
    path:'', component:Page1Component
  },
  {
    path:"homepage", component:HomeComponent
  },
  {
    path:"**", component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
