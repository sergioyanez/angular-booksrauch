import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';

import {FormsModule} from '@angular/forms';
import { BooksContactoComponent } from './books-contacto/books-contacto.component';
import { BooksCarritoComponent } from './carrito/carrito.component';
import { BooksHomeComponent } from './books-home/books-home.component';
import { BooksDramaComponent } from './books-drama/books-drama.component';
import { BooksSuspensoComponent } from './books-suspenso/books-suspenso.component';
import { BooksCortazarComponent } from './books-cortazar/books-cortazar.component';
import { BooksBorgesComponent } from './books-borges/books-borges.component';
import { InputDecreIncreComponent } from './input-decre-incre/input-decre-incre.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksContactoComponent,
    BooksCarritoComponent,
    BooksHomeComponent,
    BooksDramaComponent,
    BooksSuspensoComponent,
    BooksCortazarComponent,
    BooksBorgesComponent,
    InputDecreIncreComponent,
  
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
