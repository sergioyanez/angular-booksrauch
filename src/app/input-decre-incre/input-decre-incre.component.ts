import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../books-list/Book';

@Component({
  selector: 'app-input-decre-incre',
  templateUrl: './input-decre-incre.component.html',
  styleUrls: ['./input-decre-incre.component.scss']
})
export class InputDecreIncreComponent implements OnInit {

  constructor() { }
  @Input()  cantidad:number;
  @Input()  max:number;

  @Output() cantidadChange:EventEmitter<number> =new EventEmitter<number>();
  @Output() llegoAMax:EventEmitter<string> =new EventEmitter<string>();
  ngOnInit(): void {
  }
  sumar():void {
    if(this.cantidad<this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }   
    else
    this.llegoAMax.emit("Se llegó al máximo de stock");

  }
  restar():void {
    if(this.cantidad>0)
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
  
  hayEvento(event):void{
   if(event.key==0||event.key==1||event.key==2||event.key==3||event.key==4||event.key==5||event.key==6||event.key==7||event.key==8||event.key==9){
     if(this.cantidad>this.max){
        this.cantidadChange.emit(this.cantidad);
        alert("Ingrese una cantidad menor que "+ this.max);
     }
   }
   else{
       event.preventDefault(); 
       this.cantidadChange.emit(this.cantidad);
   }       
  }
}
