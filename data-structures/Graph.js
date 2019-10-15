const Queue=require('./Queue');
const Graph=(num)=> { 
	
		let noOfVertices = num; 
		let AdjList = new Map(); 
	
return{
	addVertex(v) 
	{ 
	
		AdjList.set(v, []); 
	},
	addEdge(v, w) 
	{ 
		AdjList.get(v).push(w);  
		AdjList.get(w).push(v); 
	},
	printGraph() 
	{ 
		var get_keys = AdjList.keys(); 
		for (var i of get_keys) 
	{ 
			
			var get_values = AdjList.get(i); 
			var conc = ""; 
			for (var j of get_values) 
				conc += j + " "; 
			console.log(i + " -> " + conc); 
		} 
	},
	bfs(startingNode) 
	{ 
	
		var visited = []; 
		for (var i = 0; i < noOfVertices; i++) 
			visited[i] = false; 
		var q =Queue(); 
	
		visited[startingNode] = true; 
		q.enqueue(startingNode); 
	
		while (!q.isEmpty()) { 
			var getQueueElement = q.dequeue(); 
			console.log(getQueueElement); 
			var get_List = AdjList.get(getQueueElement); 
			for (var i in get_List) { 
				var neigh = get_List[i]; 
	
				if (!visited[neigh]) { 
					visited[neigh] = true; 
					q.enqueue(neigh); 
				} 
			} 
		} 
	},
	dfs(startingNode) 
	{ 
		var visited = []; 
		for (var i = 0; i < noOfVertices; i++) 
			visited[i] = false; 
	
		this.DFSUtil(startingNode, visited); 
	},
	DFSUtil(vert, visited) 
	{ 
		visited[vert] = true; 
		console.log(vert); 
	
		var get_neighbours = AdjList.get(vert); 
	
		for (var i in get_neighbours) { 
			var get_elem = get_neighbours[i]; 
			if (!visited[get_elem]) 
				this.DFSUtil(get_elem, visited); 
		} 
	} 
}
	
} 

module.exports=Graph;