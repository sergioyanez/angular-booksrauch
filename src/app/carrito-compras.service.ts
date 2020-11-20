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
  listaCompras: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor() { }


  agregarACarrito(book: Book) {

   let item:Book = this._listaCompras.find((v1)=>v1.name==book.name);
   if(!item){
    this._listaCompras.push({...book});
   }
   else{
    item.quantity+=book.quantity;
   }
   this.listaCompras.next(this._listaCompras)
   console.log(this.listaCompras.value);
  }
}
