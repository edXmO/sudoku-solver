export abstract class Canvas {

  backgroundColor: string = "#565656";
  strokeStyle: string = "#FFF";
  resolution: number = this.width / 9;
  ROWS: number = 9;
  COLS: number = 9;
  
  constructor(public height: number, public width: number, public canvas: HTMLCanvasElement,  public ctx: CanvasRenderingContext2D){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.height = height;
    this.canvas.width = width;
    this.canvas.style.background = this.backgroundColor;
    this.ctx.strokeStyle = this.strokeStyle;
  }

  drawCanvas():void {
    for(let i = 0; i < this.width; i += this.resolution){
      for(let j = 0; j < this.height; j+= this.resolution){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.rect(i, j, this.resolution, this.resolution);
        this.ctx.stroke();
      }
    }
  }
}