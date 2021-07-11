import { Sudoku } from "./Sudoku";
const canvas = <HTMLCanvasElement> document.querySelector('.canvas-gl');
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

let requestAnimationID;
let maxFps: number = 60;

const sudoku = new Sudoku(500, 500, canvas, ctx);

sudoku.create();

sudoku.printNumber(0,0)


const tick = (timestamp: number): void => {

  requestAnimationID = requestAnimationFrame(tick);
}

