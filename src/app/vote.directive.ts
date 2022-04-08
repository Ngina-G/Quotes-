import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVote]'
})
export class VoteDirective {



// myMdule (module:any){
//    let counter = function(){

//     return{
//       templateUrl: '/src/app/quote/quote.component.html',
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
// //  );


constructor(private elem: ElementRef) { }

@HostListener('click') onClicks(){
  function thisFun ($scope:any){
    $scope.upVote= function(){
      $scope.count++;
  };
}}
// @HostListener('dbclick') onDoubleClicks(){
//   function thisFn ($scope:any){
//     $scope.downVote= function(){
//       $scope.count--;
//     };
// }
// }

private upVote(action:any){
  this.elem.nativeElement= action;
}
};

