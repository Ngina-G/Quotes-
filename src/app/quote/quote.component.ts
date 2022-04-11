import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
// import { faArrowUp, faArrowDown, fas } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[]= [
    new Quotes (1, 'Wine and children speak the truth.', 'Aristotle','editor',new Date(2022,3,4),0,0),
    new Quotes (2, 'How you make your bed is how you are going to sleep.','Socrates','editor', new Date(2021,6,9),0,0),
    new Quotes (3, 'Wait for the wisest of all counselors, time.','Pilates','editor', new Date(2022,1,1),0,0),
    new Quotes (4, 'Wellbeing is attained by little and little, and nevertheless is no little thing itself.','Aristotle', 'editor',new Date(2022,2,24),0,0),
    new Quotes (5, 'Madness does not go to the mountains, it goes to people.','unknown','editor', new Date(2021,3,14),0,0),
  ];

  toggleDetails(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isComplete:boolean, index: number){
    if (isComplete) {
      let toDelete =confirm(`Are you sure you want to delete ${this.quotes[index].name} ?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  upVote(index:number){
     return this.quotes[index].upCount += 1
  }
  downVote(index:number){
    return this.quotes[index].downCount += 1
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
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

// fas = fas;
// faArrowUp = faArrowUp;
// faArrowDown = faArrowDown;

  constructor() { }

  ngOnInit(): void {
  }

}
