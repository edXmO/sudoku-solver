import { Sudoku } from "./Sudoku";
const canvas = <HTMLCanvasElement> document.querySelector('.canvas-gl');
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");


const sudoku = new Sudoku(400, 400, canvas, ctx);

sudoku.drawCanvas();

sudoku.fill2DGrid();



