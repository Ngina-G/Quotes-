import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){} 

  @HostListener('click') onClick(){
    this.voteHighlight('#F78A50')
  }

  private voteHighlight(action:string){
  this.elem.nativeElement.style.backgroundColor= action;
  }
 
  }