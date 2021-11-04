//
// ===== File globals.ts
//
'use strict';

import { gql } from "@apollo/client/core";
import {EventEmitter} from "@angular/core";

export let globals:any = {
  styleTheme: 0,
};

export type Client = {
  url: string;
  name?: string;
  desc?: string;
}

export type Alert = {
  type: string;
  message: string;
}

export type Result = {
  type: number;
  result: any;
}

export type Point = {
  x: number;
  y: number;
}

export class ChangeThemeService{
  public theme$: EventEmitter<number> = new EventEmitter();

  public change(theme: number): void{
    this.theme$.emit(theme);
  }
}

export const typeDefs = gql`
  input RoutePoint{
    x: Int!
    y: Int!
  }
  
  type BandRoute{
    eulerian_circuit: String,
    edges_in_circuit: Int,
    band_tour_graph: String,
    retracing_edges: Int,
    edges_in_original_graph: Int,
    nodes_in_original_graph: Int,
    circuit_mileage: Int,
    original_trail_map_mileage: Int,
    node_visits: String,
    edge_visits: String,
    original_graph: String,
    augmented_graph: String,
    edges_transversed_more_than_once: String,
    solution_graph: String
  }

  type City{
      x: Int!,
      y: Int!
  }

  type PerfectRoute{
      cities: [City],
      city_tags: [Int],
      best_route: [Int],
      distance_traveled: Float,
      cities_x_axis: [Int],
      cities_y_axis: [Int],
      new_cities_order_x_axis: [Int],
      new_cities_order_y_axis: [Int]
  }

  type Query{
    route(points: [RoutePoint!]!): BandRoute,
    optimal(points: [RoutePoint]!): PerfectRoute,
  }
`;
