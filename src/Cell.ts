export class Cell {
  constructor(public x: number, public y: number, public data: number, public height: number, public width: number){}

  show():void{
    console.log("x coord: ", this.x, "y coord", this.y);
  }

  get value(): number{
    return this.data;
  }

}