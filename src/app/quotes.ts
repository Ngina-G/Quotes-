import { TimeInterval } from "rxjs/internal/operators/timeInterval";

export class Quotes {
    public showDetails: boolean;
    public upCount: any;
constructor(
  public id: number, 
  public name: string,
  public author: string, 
  public editor: string,
  public completeDate: Date,
  ){
    this.showDetails=false;
  }
}