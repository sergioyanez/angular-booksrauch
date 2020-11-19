import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';

@Component({
  selector: 'app-input-decre-incre',
  templateUrl: './input-decre-incre.component.html',
  styleUrls: ['./input-decre-incre.component.scss']
})
export class InputDecreIncreComponent implements OnInit {

  constructor() { }
  @Input()  book:Book;
  ngOnInit(): void {
  }
  sumar(book: Book):void {
    if(book.quantity<book.stock)
    book.quantity++;
  }
  restar(book: Book):void {
    if(book.quantity>0)
    book.quantity--;
  }
  
  hayEvento(event, book: Book):void{
   if(event.key==0||event.key==1||event.key==2||event.key==3||event.key==4||event.key==5||event.key==6||event.key==7||event.key==8||event.key==9){
     if(book.quantity>book.stock)
        alert("Ingrese una cantidad menor que"+ book.stock);
   }
   else
       event.preventDefault();  
      
  }
}
