import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,"","","",new Date(),0,0);
  @Output() addQuote= new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }


  // const nameQuote = document.querySelector("textarea");

  // onTextChange(value:any)
  // {
    
  //   if(this.nameQuote.f(value) <= 0;)
  //   {
  //     alert("Textbox is empty !!!");
  //   }
    
  // }

  ngOnInit(): void {
  }

}
