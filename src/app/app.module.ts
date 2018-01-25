import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { AppComponent } from './app.component';
import { YsxheaderComponent } from './ysxheader/ysxheader.component';
import { YsxfooterComponent } from './ysxfooter/ysxfooter.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';



import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyYcComponent } from './my-yc/my-yc.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyOrderContentComponent } from './my-order-content/my-order-content.component';


const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ShoppingCart', component: ShoppingCartComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'MyYC', component: MyYcComponent},
  {path: 'MyOrder', component: MyOrderComponent},
  {path: 'MyOrderContent/:prodTitle', component: MyOrderContentComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    YsxheaderComponent,
    YsxfooterComponent,
    ShoppingCartComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MyYcComponent,
    MyOrderComponent,
    MyOrderContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
