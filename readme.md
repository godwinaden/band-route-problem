
# Band Route Problem (BRP)

A Single Page Application (SPA) framework was used for the frontend. Precisely, 
Angular 12 was used in combination with Typescript. apollo-angular is used to 
interface with request to server API. SCSS and ng-bootstrap was used for the UI 
styling. Karma is the test-runner while Jasmine was used for unit testing. 
For visualisation, JsNetworkX and D3 javascript libraries were used. 

## INSTALLATIONS: 
You need to having the following running on your system to test and serve the 
application locally. 

    • Node js: Download the latest version online and install on machine. 
    • NPM (Node Package Management): this comes with Node.js 
    • Angular-cli : on a command prompt, run: npm i -g angular-cli
    • Git: Clone the Band-Route-Problem repository after installing the Git package on your system. 
    • After cloning the repository, cd into the project folder via a command-prompt and run the following command: npm install. 
    • The above step will make sure that all the dependencies of the project are downloaded. 
    • If everything goes well...run the app via the command-prompt:  ng serve -o --live-reload 
    • This will run the application on your local server on port 4200. 

## COMMENTARY: 
The band-route-problem (BRP) is similar to the famous **Traveling Salesman Problem** 
(TSP) and the China Postman Problem(CPP). Many scientists especially computer 
scientists have and are still under studying these problems for with the goal to 
achieve optimal solutions. Many algorithm are used most of which using end at 
finding the shortest distances between two or more nodes but in real life one 
short distance to a place could cost more when other factors are considered. 
Factors like traffic can increase fuel/diesel consumption. 
Some of the outstanding algorithm being used to **solve these problems are** 

    • Dijkstra’s Algorithm
    • Bellman-Ford Algorithm 
    • Johnson’s Algorithm 
    • Floyd-Warshall Algorithm 
    • Lee's Algorithm 

Shortest path algorithms operate on a graph, which is made 
up of vertices and edges that connect them. A graph may be directed, indirected, 
weighted, and more. It’s these distinctions that determine which algorithm will 
work better than another for certain graph types. In this project, I decided to 
combine Dijkstra's algorithm and Eulerian cycle. Dijkstra's algorithm rather than
just finding the shortest path from the starting node to another specific 
node, the algorithm works to find the shortest path to every single reachable 
node – provided the graph doesn’t change. Eulerian trail is a trail in a finite 
graph that visits every edge exactly once. Similarly, an Eulerian circuit or 
Eulerian cycle is an Eulerian trail that starts and ends on the same vertex.
Nearest Neighbor it is the simplest heuristic algorithm used to solve TSP. 
In other to solve the BRP, *I did the following:* 

    1) Select a random city n and set is as the starting city n0 a random city n and set is as the starting city n0. Here I take the first point as the starting point. 
    2) Find the nearest unvisited city and go there 
    3) Mark the current city as visited 
    4) Are there any unvisited cities? If yes, go to (2) 
    5) Return to the starting city. 

#### Programmatically:
  Because of some constraints and time, I intended and worked towards outputing a visualized diagram but I just displayed 
  with text format hoping that in the future with time, I will be able to visualize the result with real life mapping techniques and technology.
