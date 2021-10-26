import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {HttpHeaders} from "@angular/common/http";
import {typeDefs} from "./globals";

const uri = 'http://localhost:8000'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({uri});
  const headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
    'access-control-allow-origin': 'http://localhost:8000'
  });
  const middleware = new ApolloLink((operation, forward) => {
    operation.setContext({ headers: headers, withCredentials: true });
    return forward(operation);
  });

  const link = middleware.concat(http);
  return {
    link: link,
    cache: new InMemoryCache(),
    typeDefs: typeDefs
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
