import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayValLong:any = value.getTime();
    let todayVal:any = todayValLong/3600000;

    let todayTimeLong:any = new Date(today.getTime());
    let todayTime:any = todayTimeLong/3600000; //returns value in hours from miliseconds
    var dateDifference = Math.floor(todayTime - todayVal) 

    if (dateDifference >= 1 && value > todayTime){
      return dateDifference;
    }else{
      return dateDifference;
    }
  }

}
