import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';
@Component({
  selector: 'app-books-suspenso',
  templateUrl: './books-suspenso.component.html',
  styleUrls: ['./books-suspenso.component.scss']
})
export class BooksSuspensoComponent implements OnInit {
  books: Book[] = [
 
    {
      name:"El visitante",
      autor : "Stephen King",
      genere : "Suspenso",
      price: 1800,
      stock : 40,
      image : "assets/img/suspenso1.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"La chica del tren",
      autor : "Paula Hawkins",
      genere : "Suspenso",
      price: 3500,
      stock : 150,
      image : "assets/img/suspenso2.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"El silencio de los corderos",
      autor : "Thomas Harris",
      genere : "Drama",
      price: 4000,
      stock : 100,
      image : "assets/img/suspenso3.jpg",
      clearance: false,
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
