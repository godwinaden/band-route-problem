import {Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import {Point, Result} from "../../../globals";
import {Apollo, gql} from "apollo-angular";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-progress-view',
  templateUrl: './progress-view.component.html',
  styleUrls: ['./progress-view.component.scss']
})
export class ProgressViewComponent implements OnInit, OnDestroy {

  @Input("route_inputs") route_inputs: Point[] = [];
  @Input("shouldGetOptimal") shouldGetOptimal: boolean = true;
  @Output("gottenResult") gottenResult: EventEmitter<Result> = new EventEmitter();
  @Output("updateTimer") updateTimer: EventEmitter<number> = new EventEmitter();
  loading = true;
  error: any;
  result: any;
  querySubscription: Subscription | undefined;

  constructor(private apollo: Apollo,) { }

  ngOnInit(): void {
    if(this.route_inputs && this.route_inputs.length > 0) {
      this.sendRequestToServer()
    }
  }

  sendRequestToServer(): any{
    let startTimer = performance.now();
    try{
      this.querySubscription = this.apollo.query({
        errorPolicy: 'all',
        variables: {
          points: this.route_inputs,
        },
        query: this.shouldGetOptimal? gql`query getRoutes($points: [RoutePoint!]!){
            optimal(points: $points) {
                cities{x, y,},
                city_tags,
                best_route,
                distance_traveled,
                cities_x_axis,
                cities_y_axis,
                new_cities_order_x_axis,
                new_cities_order_y_axis
            }
        }` : gql`query getRoutes($points: [RoutePoint!]!){
          route(points: $points) {
            eulerian_circuit,
            band_tour_graph,
            retracing_edges,
            node_visits,
            edge_visits,
            original_graph,
            augmented_graph,
            edges_transversed_more_than_once,
            solution_graph
          }
        }`,
      }).subscribe((result: any) => {
        let endTimer = performance.now() - startTimer;
        this.result = result?.data;
        this.loading = result.loading;
        this.error = result.error;
        if(this.error) this.gottenResult.emit({type: 0, result: `${this.error}`});
        else this.gottenResult.emit({type: 1, result: this.result});
        this.updateTimer.emit(endTimer);
      });
    }catch (e) {
      console.error(e);
      this.gottenResult.emit({type: 0, result: `${e}`});
    }
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }

}
