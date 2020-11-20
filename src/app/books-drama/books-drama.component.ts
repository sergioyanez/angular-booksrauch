import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Book } from '../books-list/Book';
import { BusquedasService } from '../busquedas.service';
@Component({
  selector: 'app-books-drama',
  templateUrl: './books-drama.component.html',
  styleUrls: ['./books-drama.component.scss']
})
export class BooksDramaComponent implements OnInit {
  books:Book[]=[];


  constructor(private carrito:CarritoComprasService,
              private _librosService:BusquedasService) {
  }

    ngOnInit(): void {
      this.books=this._librosService.buscarLibrosPorGenero("Drama");
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
