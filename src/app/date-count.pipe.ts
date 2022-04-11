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
    let todayTime:any = todayTimeLong/3600000;
    var dateDifference = Math.floor(todayTime - todayVal) //returns value in miliseconds
    // const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    // var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateDifference >= 1 && value > todayTime){
      return dateDifference;
    }else{
      return dateDifference;
    }
  }

}
