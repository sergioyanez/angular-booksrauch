import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Book } from '../books-list/Book';
import { CarritoComprasService } from '../carrito-compras.service';


@Component({
  selector: 'app-books-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class BooksCarritoComponent implements OnInit {

listaCompras$: Observable<Book[]>;
total$: Observable<number>;
  constructor(private carrito:CarritoComprasService) {
    this.listaCompras$=carrito.listaCompras.asObservable();
    console.log(this.listaCompras$)
    this.total$ = carrito.total.asObservable();
   }

  ngOnInit(): void {
  }

}
