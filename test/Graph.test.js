const ds = require("../index");
const { Graph } = ds;
console.log("test for ll");

var g = Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];  
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
g.printGraph(); 
console.log("bfs");
g.bfs('A'); 
console.log("dfs");
g.dfs('A'); 

