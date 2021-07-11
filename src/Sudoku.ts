import { Canvas } from "./Canvas";

export class Sudoku extends Canvas {

  constructor(height: number, width: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    super(height, width, canvas, ctx);
  }

  isAllowed(): boolean {
    return false;
  };

  checkRow():void{};
  checkCol():void{};
  check3x3():void{};

}

