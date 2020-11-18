import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [
 
    {
      name:"La sabiduría de los lobos",
      autor : "Eli H. Radinger",
      genere : "Drama",
      price: 1000,
      stock : 10,
      image : "assets/img/libro1.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"La viajera del tiempo",
      autor : "Lorena Franco",
      genere : "Ficción",
      price: 2000,
      stock : 0,
      image : "assets/img/libro2.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Los juegos del hambre",
      autor : "Suzanne Collins",
      genere : "Ficción",
      price: 500,
      stock : 800,
      image : "assets/img/libro3.jpg",
      clearance: true,
      quantity : 0,
    }
]
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(book: Book):void {
    if(book.quantity<book.stock)
    book.quantity++;
  }
  downQuantity(book: Book):void {
    if(book.quantity>0)
    book.quantity--;
  }
}
