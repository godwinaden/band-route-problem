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
  @Output("try_again") try_again: EventEmitter<number> = new EventEmitter();
  showAlert: boolean = false;
  hasResult: boolean = false;
  optimal: any;
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
