import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
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
      genere : "Suspenso",
      price: 4000,
      stock : 100,
      image : "assets/img/suspenso3.jpg",
      clearance: false,
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
