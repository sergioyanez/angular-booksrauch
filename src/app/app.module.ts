import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';

import {FormsModule} from '@angular/forms';
import { BooksContactoComponent } from './books-contacto/books-contacto.component';
import { BooksCarritoComponent } from './books-carrito/books-carrito.component';
import { BooksHomeComponent } from './books-home/books-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksContactoComponent,
    BooksCarritoComponent,
    BooksHomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
