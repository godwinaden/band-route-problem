import { Component, OnInit } from '@angular/core';
import {globals, Point, Result} from "../../globals";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  //step indicates the view to display: 0 -> Input View, 1 -> Process Indicator view, 2 -> Output View
  step: number = 0;
  instruction: string = "Kindly Add Various Locations You Intend to Visit In Points (x,y)";
  input_routes: Point[] = [];
  shouldGetOptimal: boolean = true;
  result: Result | undefined;
  optTime: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startProcess(routes: Array<Point>): void {
    this.input_routes = routes;
    this.changeStep(1);
  }

  updateTime(timeTaken: number): void{
    this.optTime = timeTaken;
  }

  changeOptimizationOption(option: boolean): void{
    this.shouldGetOptimal = option;
  }

  tryAgain(step: number): void {
    this.changeStep(0);
  }

  getResult(result: Result): void{
    this.result = result;
    if(this.result) this.changeStep(2);
  }

  changeStep(to: number): void{
    this.step = to;
    this.instruction = to == 0? "Kindly Add Various Locations You Intend to Visit In Points (x,y)" : (
      to == 1? "Optimizing operations in progress..." : "Here Is The Best Route To Reach Your Destinations At Low Cost."
    );
  }

}
