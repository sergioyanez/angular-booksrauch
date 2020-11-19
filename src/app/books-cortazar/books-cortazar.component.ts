import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';
@Component({
  selector: 'app-books-cortazar',
  templateUrl: './books-cortazar.component.html',
  styleUrls: ['./books-cortazar.component.scss']
})
export class BooksCortazarComponent implements OnInit {
  books: Book[] = [
 
    {
      name:"Rayuela",
      autor : "Julio Cortazar",
      genere : "Drama",
      price: 1000,
      stock : 10,
      image : "assets/img/cortazar1.jpg",
      clearance: true,
      quantity : 0,
    },
    {
      name:"Clases de Literatura",
      autor : "Julio Cortazar",
      genere : "Biográfico",
      price: 3500,
      stock : 8,
      image : "assets/img/cortazar2.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Final del Juego",
      autor : "Julio Cortazar",
      genere : "Suspenso",
      price: 4000,
      stock : 50,
      image : "assets/img/cortazar3.jpg",
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
