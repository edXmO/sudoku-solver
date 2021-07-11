import { Cell } from "./Cell";

export class Canvas {

  backgroundColor: string = "#565656";
  strokeStyle: string = "#FFF";
  ROWS: number = 9;
  COLS: number = 9;
  res: number = this.width / this.ROWS;
  grid: Cell[][] = [];
  
  constructor(public height: number, public width: number, public canvas: HTMLCanvasElement,  public ctx: CanvasRenderingContext2D){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.height = height;
    this.canvas.width = width;
    this.canvas.style.background = this.backgroundColor;
    this.ctx.strokeStyle = this.strokeStyle;
  }

  create():void {
    for(let i = 0; i < this.ROWS; i++){
      this.grid[i] = [];
      for(let j = 0; j < this.COLS; j ++){
        const cell = new Cell(i, j, 0, this.res, this.res);
        this.grid[i][j] = cell;
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.rect(i * this.res, j * this.res,this.res, this.res);
        this.ctx.stroke();
      }
    }
  }

  colorCell(row: number, col: number): void {
    const { x, y, height, width } = this.grid[row][col];
    this.ctx.fillStyle = "#fff";
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.fillRect(x, y, height, width);
  } 

  printNumber(row:number, col: number):void {
    const { x, y, height, width, value } = this.grid[row][col];
    this.ctx.fillStyle = "#fff";
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.font = '50px serif';
    this.ctx.fillText(`${value}`, x, y);
  }

}