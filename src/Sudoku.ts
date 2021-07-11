import { Canvas } from "./Canvas";
import { Cell } from "./Cell";

export class Sudoku extends Canvas {

  grid: Cell[][] = [...Array(9).map(e => Array(9))];
  counter: number = 0;

  constructor(height: number, width: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    super(height, width, canvas, ctx);
  }

  fill2DGrid():void {
    for(let i = 0; i <= this.ROWS; i++){
      this.grid[i] = [];
      for(let j = 0; j <= this.COLS; j++){
        const cell = new Cell(i, j, Math.floor(Math.random() * 9));
        this.grid[i][j] = cell;
      }
    }
  }
}

