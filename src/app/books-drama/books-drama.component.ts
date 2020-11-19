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
  sumar(book: Book):void {
    if(book.quantity<book.stock)
    book.quantity++;
  }
  restar(book: Book):void {
    if(book.quantity>0)
    book.quantity--;
  }
  
  hayEvento(event, book: Book):void{
   if(event.key==0||event.key==1||event.key==2||event.key==3||event.key==4||event.key==5||event.key==6||event.key==7||event.key==8||event.key==9){
     if(book.quantity>book.stock)
        alert("Ingrese una cantidad menor que"+ book.stock);
   }
   else
       event.preventDefault();  
      
  }

}
