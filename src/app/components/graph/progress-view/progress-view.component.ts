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
  @Output("gottenResult") gottenResult: EventEmitter<Result> = new EventEmitter();
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
    try{
      this.querySubscription = this.apollo.query({
        errorPolicy: 'all',
        variables: {
          points: this.route_inputs,
        },
        query: gql`query getRoutes($points: [RoutePoint!]!){
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
        this.result = result?.data;
        this.loading = result.loading;
        this.error = result.error;
        if(this.error) this.gottenResult.emit({type: 0, result: `${this.error}`});
        else this.gottenResult.emit({type: 1, result: this.result});
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
