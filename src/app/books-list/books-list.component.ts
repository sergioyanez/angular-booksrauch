import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
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
    },
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
