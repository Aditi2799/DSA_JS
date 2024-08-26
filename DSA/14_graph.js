//depth first search graph==>In the graph repeated node should not be entered again

//iterative
function depthFSIterative(graph,start){
    const stack=[start]
    const visited= new Set()

    while(stack.length>0){
        const node = node.pop()
        if(!visited.has(node)){}
        visited.add(node)
        for(const neighbour of graph[node]){
            if(!visited.has(neighbour)){
                stack.push(neighbour)
            }
        }
    }
}

//recursive
function depthFSR(graph,start,visited=new Set()){
    if(!visited.has(start)){
         visited.add(start)
        for(const neighbour of graph[start]){
            depthFSR(graph,neighbour,visited)
        }
    }
}