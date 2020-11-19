import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from './books-home/books-home.component';
import { BooksContactoComponent } from './books-contacto/books-contacto.component';
import {  BooksBorgesComponent }from './books-borges/books-borges.component';
import { BooksCortazarComponent } from './books-cortazar/books-cortazar.component';
import { BooksDramaComponent } from './books-drama/books-drama.component';
import { BooksSuspensoComponent } from './books-suspenso/books-suspenso.component';
const routes: Routes = [
  {
    path: '',     
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',     
    component: BooksHomeComponent,
  },
  {
    path: 'contacto',     
    component:  BooksContactoComponent,
  },
  {
    path: 'Borges',     
    component: BooksBorgesComponent,
  },
  {
    path: 'Cortazar',     
    component: BooksCortazarComponent,
  },

  {
    path: 'drama',     
    component: BooksDramaComponent,
  },
  {
    path: 'suspenso',     
    component: BooksSuspensoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

