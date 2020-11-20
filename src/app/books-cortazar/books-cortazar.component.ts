import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
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
