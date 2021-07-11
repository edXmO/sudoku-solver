import { Canvas } from "./Canvas";
const canvas = <HTMLCanvasElement> document.querySelector('.canvas-gl');
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

const grid = new Canvas(500, 500, canvas, ctx);

grid.drawGrid();