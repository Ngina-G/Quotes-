export class Quotes {
    public showDetails: boolean;
constructor(
  public id: number, 
  public name: string,
  public author: string, 
  public editor: string,
  public completeDate: Date,
  public upCount: number,
  public downCount: number

  ){
    this.showDetails=false;
  }
}