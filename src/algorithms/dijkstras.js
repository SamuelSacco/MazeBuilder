import animateSearch from "../animate";

const _dijkstras = (tile) => {
    let queue = [[tile]]
    let searchPath = [];
    let path;

    while (queue) {
        path = queue.shift()
        if (!path){
            alert("YOU WIN!.. (clear something and try again)")
            break;
        }
        tile = path[path.length - 1]
        // console.log("fadfd",tile)
        searchPath.push(tile)

        if (tile.type === "end") {
            return [searchPath, path, true]
        }

        for (let idx in tile.neighbors) {
            let neighbor = tile.neighbors[idx]
            if (neighbor.visited || neighbor.tileDiv.classList.contains("wall")) continue;
            neighbor.visited = true
            queue.push(path.concat([neighbor]))
        }
    }
    return [searchPath, [], false] // no solution
}

const dijkstras = (tile) => {
    let searchPath;
    let foundSolution;
    let correctPath;

    [searchPath, correctPath, foundSolution] = _dijkstras(tile);
    // if (searchPath.length === 0) {
    //     alert("Good job dickhead you win")
    // }
    animateSearch(searchPath, correctPath);
    return searchPath;
}

export default dijkstras;