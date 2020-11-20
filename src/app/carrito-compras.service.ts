import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './books-list/Book';

/**
 * Maneja la lógica del carrito *
 */
@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private _listaCompras: Book[]=[];
  _total = 0;
  _contProductos = 0;
  listaCompras: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  cantidad: BehaviorSubject<number> = new BehaviorSubject(this._contProductos);
  constructor() { }


  agregarACarrito(book: Book) {

   let item:Book = this._listaCompras.find((v1)=>v1.name==book.name);
   if(!item){
    this._listaCompras.push({...book});
   }
   else{
    item.quantity+=book.quantity;
   }
   this._total = this._listaCompras.reduce((a, c) => c.price * c.quantity + a, 0);
   this.listaCompras.next(this._listaCompras);
   this.cantidad.next(this._contProductos);
   this.total.next(this._total);
   console.log(this.listaCompras.value);
  }
}
