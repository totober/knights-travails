class Node {
        
    constructor(edge, prev) {

        this.edge = edge
        this.prev = prev
    }
}

class Board {

    static rowQantity = 8
    static columnQantity = 8
    static row = 0;
    static column = 0
}


class Knight {

    knightMoves(from, to) {

        let adjacencyList = this.createAdjacencyList()

        let queue = [new Node(from, "HEAD")]


        while( queue.length > 0) {

           let current = queue.shift()

            if (current.edge[0] === to[0] && current.edge[1] === to[1]) {

                let path = []

                let currentLoop = current

                while(currentLoop !== "HEAD") {

                    path.unshift([...currentLoop.edge])
                    currentLoop = currentLoop.prev
                }

               return [path, adjacencyList]
            }

            Board.row = current.edge[0]
            Board.column = current.edge[1]

            let moves = [[Board.row - 2, Board.column + 1], [Board.row - 2, Board.column - 1], 
                         [Board.row - 1, Board.column + 2], [Board.row + 1, Board.column + 2],
                         [Board.row + 2, Board.column + 1], [Board.row + 2, Board.column - 1],
                         [Board.row - 1, Board.column - 2], [Board.row + 1, Board.column - 2]]


            for(let move of moves) {

                if( move[0] < 0 || move[1] < 0 || 
                    move[0] > Board.rowQantity - 1 || move[1] > Board.columnQantity - 1) continue

                if(!(adjacencyList[move[0]].includes(move[1]))) {

                    adjacencyList[move[0]].push(move[1]) 
                    queue.push(new Node(move, current))
                } 
            }
        } 
    } 

    createAdjacencyList(){

        let adjacencyList = []

        for(let i = 0; i < Board.rowQantity; i++) {

            adjacencyList.push([])
        }

        return adjacencyList
    }
}

let k = new Knight()