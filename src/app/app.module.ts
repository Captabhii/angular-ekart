import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './Header/Header.component';
import { TopHeaderComponent } from './Header/top-header/top-header.component';
import { TopMenuComponent } from './Header/top-menu/top-menu.component';
import { MenuComponent } from './Header/menu/menu.component';
import { ProductlistComponent } from './productlist/productlist.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MenuComponent,
    ProductlistComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
