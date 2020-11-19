import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';
@Component({
  selector: 'app-books-drama',
  templateUrl: './books-drama.component.html',
  styleUrls: ['./books-drama.component.scss']
})
export class BooksDramaComponent implements OnInit {
  books: Book[] = [
 
    {
      name:"La vida que no elegí",
      autor : "Lorena Franco",
      genere : "Drama",
      price: 5000,
      stock : 30,
      image : "assets/img/drama1.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Lo que el viento se llevo",
      autor : "Margaret Mitchell",
      genere : "Drama",
      price: 3500,
      stock : 150,
      image : "assets/img/drama2.jpg",
      clearance: true,
      quantity : 0,
    },
    {
      name:"El código Da Vinci",
      autor : "Dan Brown",
      genere : "Drama",
      price: 4000,
      stock : 100,
      image : "assets/img/drama3.jpg",
      clearance: true,
      quantity : 0,
    },
];
  constructor() { }

  ngOnInit(): void {
  }
  
}
