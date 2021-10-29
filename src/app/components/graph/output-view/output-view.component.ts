import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Alert, Result} from "../../../globals";

@Component({
  selector: 'app-output-view',
  templateUrl: './output-view.component.html',
  styleUrls: ['./output-view.component.scss']
})
export class OutputViewComponent implements OnInit {

  @Input("result") result: Result | undefined;
  @Input("hasOptimal") hasOptimal: boolean = true;
  @Input("timer") timer: number = 0;
  @Output("try_again") try_again: EventEmitter<number> = new EventEmitter();
  showAlert: boolean = false;
  hasResult: boolean = false;
  optimal: any;
  graph_data: Array<any> = [];
  graph_layout = {
    title: 'Optimal Route',
    showlegend: false,
  };
  graph_config = {
    toImageButtonOptions: {
      format: 'png',
      height: 500,
      width: 700,
      scale: 1
    }
  };
  alert: Alert = {
    type: "success",
    message: "Things Okay"
  };

  constructor() { }

  ngOnInit(): void {
    if(this.result && this.result?.type != 0){
      this.alert.type = "success";
      this.alert.message = "The Route Optimizer Has Ascertain The Following:";
      this.hasResult = true;
      this.optimal = this.hasOptimal? this.result?.result?.optimal: null;
      let trace1 = {
        x: this.optimal?.cities_x_axis,
        y: this.optimal?.cities_y_axis,
        type: 'scatter',
        mode: 'lines+markers'
      };
      let trace2 = {
        x: this.optimal?.new_cities_order_x_axis,
        y: this.optimal?.new_cities_order_y_axis,
        type: 'scatter',
        mode: 'lines+markers'
      };
      this.graph_data = [ trace1, trace2];
      console.log(`Results: ${this.result?.result?.route}`)
    }else{
      this.alert.type = "danger";
      this.alert.message = this.result?.result;
    }
    this.showAlert = true;
  }

  keys() : Array<string> {
    return Object.keys(this.result?.result?.route);
  }

  closeAlert(): void{
    this.showAlert = false;
    this.alert.message = "";
    this.alert.type = '';
  }

  tryAgain(): void{
    this.try_again.emit(0);
  }

  trackItem(index: number, item: any){
    return item;
  }

}
