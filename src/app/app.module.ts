import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './Header/Header.component';
import { TopHeaderComponent } from './Header/top-header/top-header.component';

import { ProductListComponent } from './productlist/productlist.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    TopHeaderComponent,

    ProductListComponent,
    SearchComponent,
    


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
