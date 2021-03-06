import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
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
      stock : 4,
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
      stock : 0,
      image : "assets/img/cortazar2.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Final del Juego",
      autor : "Julio Cortazar",
      genere : "Suspenso",
      price: 4000,
      stock : 6,
      image : "assets/img/cortazar3.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"El Aleph",
      autor : "J.L. Borges",
      genere : "Drama",
      price: 1000,
      stock : 5,
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
      stock : 4,
      image : "assets/img/borges3.jpg",
      clearance: true,
      quantity : 0,
    },
    {
      name:"La vida que no elegí",
      autor : "Lorena Franco",
      genere : "Drama",
      price: 5000,
      stock : 10,
      image : "assets/img/drama1.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"El visitante",
      autor : "Stephen King",
      genere : "Suspenso",
      price: 1800,
      stock : 9,
      image : "assets/img/suspenso1.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"La chica del tren",
      autor : "Paula Hawkins",
      genere : "Suspenso",
      price: 3500,
      stock : 2,
      image : "assets/img/suspenso2.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"El silencio de los corderos",
      autor : "Thomas Harris",
      genere : "Drama",
      price: 4000,
      stock : 3,
      image : "assets/img/suspenso3.jpg",
      clearance: false,
      quantity : 0,
    },
    {
      name:"Lo que el viento se llevo",
      autor : "Margaret Mitchell",
      genere : "Drama",
      price: 3500,
      stock : 5,
      image : "assets/img/drama2.jpg",
      clearance: true,
      quantity : 0,
    },
    {
      name:"El código Da Vinci",
      autor : "Dan Brown",
      genere : "Drama",
      price: 4000,
      stock : 7,
      image : "assets/img/drama3.jpg",
      clearance: true,
      quantity : 0,
    },
];

  constructor(private carrito:CarritoComprasService) {

  }

  ngOnInit(): void {
  }

  agregarACarrito(book):void{
    this.carrito.agregarACarrito(book);
    book.stock-=book.quantity;
    book.quantity=0;

  }

  llegoAMax(mensaje:string){
    alert(mensaje);
  }


}
