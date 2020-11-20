import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Book } from '../books-list/Book';
import { BusquedasService } from '../busquedas.service';
@Component({
  selector: 'app-books-suspenso',
  templateUrl: './books-suspenso.component.html',
  styleUrls: ['./books-suspenso.component.scss']
})
export class BooksSuspensoComponent implements OnInit {
  books:Book[]=[];


  constructor(private carrito:CarritoComprasService,
              private _librosService:BusquedasService) {
  }

    ngOnInit(): void {
      this.books=this._librosService.buscarLibrosPorGenero("Suspenso");
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
