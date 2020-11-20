import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
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
