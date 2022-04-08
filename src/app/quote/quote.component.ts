import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[]= [
    new Quotes(1, 'Wine and children speak the truth.', new Date(2020,3,14)),
    new Quotes(2, 'How you make your bed is how you are going to sleep.', new Date(2020,3,14)),
    new Quotes(3, 'Wait for the wisest of all counselors, time.', new Date(2020,3,14)),
    new Quotes(4, 'Wellbeing is attained by little and little, and nevertheless is no little thing itself.', new Date(2020,3,14)),
    new Quotes(5, 'Madness does not go to the mountains, it goes to people.', new Date(2020,3,14)),
  ];

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete:boolean, index: number){
    if (isComplete) {
      let toDelete =confirm(`Are you sure you want to delete ${this.quotes[index].name} ?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upCount = 0;
  showCount = false;

  onShowLog(){
       this.showCount = true;
       return this.upCount = this.upCount + 1;
  }
  //   public counter : number = 0;

  // upVoteQuote(itIsComplete: boolean, index:number){
  //   if (itIsComplete) {
  //     this.counter += 1;
  //     // this.quotes[index](index,this.counter)
  //         console.log (this.counter);
  //     }
  //     }
// myMdule (module:any){
//    let counter = function(){

//     return{
//       scope: { model: '=ngModel'},
//       controller: function($scope:any){
//         $scope.upVote= function(){
//           $scope.count++;
//         };
//         $scope.downVote = function(){
//           $scope.count--;
//         };
//       }
//     }
//    };
//    module.Directive('counter', counter);
//  }

  constructor() { }

  ngOnInit(): void {
  }

}
