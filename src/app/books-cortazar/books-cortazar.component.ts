import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Book } from '../books-list/Book';
import { BusquedasService } from '../busquedas.service';
@Component({
  selector: 'app-books-cortazar',
  templateUrl: './books-cortazar.component.html',
  styleUrls: ['./books-cortazar.component.scss']
})
export class BooksCortazarComponent implements OnInit {
  books: Book[] = []



constructor(private carrito:CarritoComprasService,
            private _librosService:BusquedasService) {
}

ngOnInit(): void {
  this.books=this._librosService.buscarLibrosPorAutor("Julio Cortazar");
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
