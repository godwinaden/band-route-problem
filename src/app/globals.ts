//
// ===== File globals.ts
//
'use strict';

import { gql } from "@apollo/client/core";

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

  type Query{
    route(points: [RoutePoint!]!): BandRoute
  }
`;

