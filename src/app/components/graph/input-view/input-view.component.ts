import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Alert, Point} from "../../../globals";

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.scss']
})
export class InputViewComponent implements OnInit {

  y_axis: number = 0;
  x_axis: number = 0;
  routes_inputs: Point[] = [];
  string_routes_inputs: string = "";
  showAlert: boolean = false;
  alert: Alert = {
    type: "success",
    message: "Things Okay"
  };
  @Output('changeStep') changeStep: EventEmitter<Array<Point>> = new EventEmitter();
  @Output('changeOptimalOption') changeOptimalOption: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addPoint(event: Event): void {
    event.preventDefault();
    try {
      //add input to point array
      let point: Point = {x: this.x_axis, y: this.y_axis};
      this.routes_inputs.push(point);
      //empty input fields
      this.x_axis = this.y_axis = 0;
      //cast array of inputs to string for user to see
      this.string_routes_inputs = JSON.stringify(this.routes_inputs);
      console.log(`total: ${this.routes_inputs.length}`);
      console.log(`points x: ${this.routes_inputs[0]}`);
    }catch (e) {
      this.handleError(e);
    }
  }

  setOptimalOption(option: boolean): void{
    this.changeOptimalOption.emit(option);
  }

  handleError(e: any): void{
    this.alert.message = `${e}`;
    this.alert.type = 'danger';
    this.showAlert = true;
    console.error(e);
  }

  changed(): void{
    console.log(`x: ${this.x_axis}`);
    console.log(`y: ${this.y_axis}`);
  }

  closeAlert(): void{
    this.showAlert = false;
    this.alert.message = "Operations Succeeded";
    this.alert.type = 'success';
  }

  optimize(event: Event): void {
    event.preventDefault();
    try{
      //check to see if the data supplied is legit
      let parsed_input = JSON.parse(this.string_routes_inputs);
      if(typeof(parsed_input) === "object" && Array.isArray(parsed_input)) {
        parsed_input.forEach((item) => {
          if(Object.prototype.toString.call(item) != "[object Object]") throw new TypeError('type error');
        });
        this.routes_inputs = parsed_input;
        console.log(`${this.routes_inputs[0].x}`);
        //start the process. Emit Event for parent to move to step 1.
        this.changeStep.emit(this.routes_inputs);
      }
    }catch (e) {
      this.handleError(e);
    }
  }

}
