import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';
@Component({
  selector: 'app-books-borges',
  templateUrl: './books-borges.component.html',
  styleUrls: ['./books-borges.component.scss']
})
export class BooksBorgesComponent implements OnInit {
  books: Book[] = [
 
    {
      name:"El Aleph",
      autor : "J.L. Borges",
      genere : "Drama",
      price: 1000,
      stock : 10,
      image : "assets/img/borges1.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Cuentos completos",
      autor : "J.L. Borges",
      genere : "Ficción",
      price: 3500,
      stock : 8,
      image : "assets/img/borges2.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Ficciones",
      autor : "J.L. Borges",
      genere : "Ficción",
      price: 4000,
      stock : 100,
      image : "assets/img/borges3.jpg",
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
