import { Cell } from "./Cell";

export class Canvas {

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private backgroundColor: string = "#565656";
  private strokeStyle: string = "#FFF";
  private fillStyle: string = "#FFF";
  private resolution: number = this.width / 9;
  
  constructor(public height: number, public width: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.height = height;
    this.canvas.width = width;
    this.canvas.style.background = this.backgroundColor;
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.strokeStyle = this.strokeStyle;
  }

  drawGrid(){
    for(let i = 0; i < this.width; i += this.resolution){
      for(let j = 0; j < this.height; j += this.resolution){ 
      }
    }    
  }



}