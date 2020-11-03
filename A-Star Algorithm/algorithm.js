
// // var rows = 5;
// // var cols = 5;
// // var grid = new Array(cols);
// // var h, w;

// // var openSet = [];
// // var closeSet = [];
// // var start, end;
// // class Spot {
// //     constructor(i, j) {
// //         this.i = i;
// //         this.j = j;
// //         this.f = 0;
// //         this.neighbours = [];
// //         this.show = function () {
// //             rect(i * w, j * h, w, h);
// //         }

// //         this.addNeighbours = function (grid) {
// //             if (i > 0) {
// //                 this.neighbours.push(grid[i - 1][j]);
// //             }
// //             if (i < cols - 1) {
// //                 this.neighbours.push(grid[i + 1][j]);
// //             }
// //             if (j > 0) {
// //                 this.neighbours.push(grid[i][j - 1]);
// //             }
// //             if (j < rows - 1) {
// //                 this.neighbours.push(grid[i][j + 1]);
// //             }
// //         }
// //     }
// // }

// // function removeElement(list, e) {
// //     for (var i = 0; i < list.length; i++) {
// //         if (list[i] == e) {
// //             list.splice(i, 1);
// //         }
// //     }

// // }

// // function setup() {
// //     createCanvas(400, 400);
// //     console.log("A*");

// //     w = width / cols;
// //     h = height / rows;

// //     for (var i = 0; i < cols; i++) {
// //         grid[i] = new Array(rows);
// //     }

// //     for (var i = 0; i < cols; i++) {
// //         for (var j = 0; j < rows; j++) {
// //             grid[i][j] = new Spot(i, j);
// //         }
// //     }


// // for (var i = 0; i < cols; i++) {
// //     for (var j = 0; j < rows; j++) {
// //         grid[i][j].addNeighbours(grid);
// //     }
// // }
// //     start = grid[0][0];
// //     openSet.push(start);

// //     end = grid[cols - 1][rows - 1];

// // }



// // function draw() {
// //     background(0);


// //     // draw the grid
// //     for (var i = 0; i < cols; i++) {
// //         for (var j = 0; j < rows; j++) {
// //             grid[i][j].show(255);
// //         }
// //     }


// //     if (openSet.length > 0) {

// //         winner = 0;
// //         for (var i = 0; i < openSet.length; i++) {
// //             if (openSet[i].f < openSet[winner].f) {
// //                 winner = i;
// //             }
// //         }

// //         var current = openSet[winner];

// //         if (current == end) {
// //             console.log("Done");
// //         }

// //         removeElement(openSet, current);
// //         closeSet.push(current);

// //     }
// //     else {

// //     }
// // for (var i = 0; i < openSet.length; i++) {
// //     openSet[i].show(color(0, 255, 0));
// // }
// // for (var i = 0; i < closedSet.length; i++) {
// //     closedSet[i].show(color(255, 0, 0));
// // }
// // }
































// // f = g + h
// // g is the distance to reach that spot
// // h is the distance between that spot and the end . 
// // Just the lenght of the straigt line from that spot to the end.


// openSet = [] // has nodes that will be needed .Algorithm will be over when its empty or if you arrive at the end. It Starts with only one node. 
// closedSet = [] // list of all visited and evaluated nodes which we dont need later.



// var cols = 25;
// var rows = 25;
// var grid = new Array(cols);

// var openSet = [];
// var closedSet = [];
// var start;
// var end;
// var w, h;
// var path1 = [];


// class Spot {
//     constructor(i, j) {
//         this.i = i;
//         this.j = j;
//         this.g = 0;
//         this.f = 0;
//         this.h = 0;
//         this.previous = undefined;
//         this.neighbours = [];
//         this.show = function (col) {
//             fill(col);
//             stroke(0);
//             rect(this.i * w, this.j * h, w, h); //rect(x,y,length,height)
//         };
//         this.addNeighbours = function (grid) {
//             var i = this.i;
//             var j = this.j;
//             if (i < cols - 1) {
//                 this.neighbours.push(grid[i + 1][j]);
//             }
//             if (i > 0) {
//                 this.neighbours.push(grid[i - 1][j]);
//             }
//             if (j < rows - 1) {
//                 this.neighbours.push(grid[i][j + 1]);
//             }
//             if (j > 0) {
//                 this.neighbours.push(grid[i][j - 1]);
//             }
//             if (i > 0 && j > 0) {
//                 this.neighbours.push(grid[i - 1][j - 1]);
//             }
//             if (i < cols - 1 && j > 0) {
//                 this.neighbours.push(grid[i + 1][j - 1]);
//             }
//             if (i > 0 && j < rows - 1) {
//                 this.neighbours.push(grid[i - 1][j + 1]);
//             }
//             if (i < cols - 1 && j < rows - 1) {
//                 this.neighbours.push(grid[i + 1][j + 1]);
//             }

//         };
//     }
// }


// function removeElement(arr, e) {
//     // going backword in the array
//     for (i = arr.length; i >= 0; i--) {   //going forward after deletion the loop will skip the next array.
//         if (arr[i] == e) {
//             arr.splice(i, 1);   //remove 1 element from index i
//             ///////////////////////////////////////////////////////////////?????????????????
//         }
//     }
// }

// function heuristic(a, b) {
//     // var d =(a.i, a.j, b.i, b.j);  ///euclidian distance
//     var d = abs(a.i - b.i) + abs(a.j - b.j);  //manhattan distance
//     return d;
// }







// function setup() {
//     createCanvas(400, 400);
//     console.log('A*');


//     w = width / cols;
//     h = height / rows;

//     // making a 2d array
//     for (var i = 0; i < cols; i++) {
//         grid[i] = new Array(rows);
//     }

//     for (var i = 0; i < cols; i++) {
//         for (var j = 0; j < rows; j++) {
//             grid[i][j] = new Spot(i, j);
//         }
//     }

//     for (var i = 0; i < cols; i++) {
//         for (var j = 0; j < rows; j++) {
//             grid[i][j].addNeighbours(grid);
//         }
//     }

//     start = grid[0][0];
//     openSet.push(start);
//     end = grid[cols - 1][rows - 1];
// }

// function draw() {   //its the loop that draws on the frame canvas

//     if (openSet.length > 0) {
//         winner = 0;
//         for (var i = 0; i < openSet.length; i++) {
//             if (openSet[i].f < openSet[winner].f) {
//                 winner = i;
//             }
//         }
//         var current = openSet[winner];


//         if (current === end) {
//             noLoop();
//             console.log("DONE!")
//         }




//         removeElement(openSet, current);
//         closedSet.push(current);

//         // evaluating the neighbours
//         var neighbours = current.neighbours;

//         for (var i = 0; i < neighbours.length; i++) {
//             var neighbour = neighbours[i];
//             if (!closedSet.includes(neighbour)) {
//                 var tempG = current.g + 1;
//                 if (openSet.includes(neighbour)) {
//                     if (tempG < neighbour.g) {
//                         neighbour.g = tempG;
//                     }
//                 } else {
//                     neighbour.g = tempG;
//                     openSet.push(neighbour);
//                 }
//                 neighbour.h = heuristic(neighbour, end);
//                 neighbour.f = neighbour.g + neighbour.h;
//                 neighbour.previous = current;
//             }

//         }
//     } else {
//         noLoop();
//     }
//     background(0);

//     for (var i = 0; i < cols; i++) {
//         for (var j = 0; j < rows; j++) {
//             grid[i][j].show(color(255));
//         }
//     }

//     for (var i = 0; i < openSet.length; i++) {
//         openSet[i].show(color(0, 255, 0));
//     }
//     for (var i = 0; i < closedSet.length; i++) {
//         closedSet[i].show(color(255, 0, 0));
//     }

//     // find the final path1
//     path1 = [];
//     var temp = current;
//     path1.push(temp);
//     while (temp.previous) {
//         path1.push(temp.previous);
//         temp = temp.previous;
//     }
//     for (var i = 0; i < path1.length; i++) {
//         path1[i].show(color(0, 0, 255));
//     }




// }


var cols = 25;
var rows = 25;
var openSet = [];
console.log(openSet);
var grid = new Array(cols);
var current = 0;
var closedNodes = [];
var path1 = [];




function Spot(i, j) {

    // Location
    this.i = i;
    this.j = j;

    // f, g, and h values for A*
    this.d = 0;
    this.h = 0;

    // Neighbors
    this.neighbors = [];

    // Where did I come from?
    this.previous = undefined;

    // Display me
    this.show = function (col) {
        fill(col);
        rect(this.i * w, this.j * h, w, h);
    }

    // Figure out who my neighbors are
    this.addNeighbors = function (grid) {
        var i = this.i;
        var j = this.j;
        if (i < cols - 1) {
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0) {
            this.neighbors.push(grid[i - 1][j]);
        }
        if (j < rows - 1) {
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0) {
            this.neighbors.push(grid[i][j - 1]);
        }
        if (i > 0 && j > 0) {
            this.neighbors.push(grid[i - 1][j - 1]);
        }
        if (i < cols - 1 && j > 0) {
            this.neighbors.push(grid[i + 1][j - 1]);
        }
        if (i > 0 && j < rows - 1) {
            this.neighbors.push(grid[i - 1][j + 1]);
        }
        if (i < cols - 1 && j < rows - 1) {
            this.neighbors.push(grid[i + 1][j + 1]);
        }
    }
}

function removeFromArray(arr, elt) {
    // Could use indexOf here instead to be more efficient
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == elt) {
            arr.splice(i, 1);
        }
    }
}

function heuristic(a, b) {
    var d = dist(a.i, a.j, b.i, b.j);
    // var d = abs(a.i - b.i) + abs(a.j - b.j);
    return d;
}

function setup() {
    createCanvas(400, 400);
    w = width / cols;
    h = height / rows;
    // Making a 2D array
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }

    // All the neighbors
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].addNeighbors(grid);
        }
    }

    console.log(path1);
    start = grid[0][0];
    end = grid[cols - 1][rows - 1];
    path1.push(start);
    current = start;
    closedNodes.push(start);
    console.log(path1);
}

function draw() {
    background(0);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show(255);
        }
    }
    n = current.neighbors;
    for (var i = 0; i < n.length; i++) {
        n[i].show(color(0, 255, 255));
    }
    for (var i = 0; i < n.length; i++) {
        neighbor = n[i]
        if (!closedNodes.includes(neighbor)) {
            neighbor.d = current.d + heuristic(neighbor, current);
            neighbor.h = heuristic(neighbor, end) + neighbor.d;
            neighbor.previous = current;
        } else {
            removeFromArray(n, neighbor);
        }

    }
    var temp = n[0]
    for (var i = 1; i < n.length; i++) {
        if (n[i].d < temp.d) {
            temp = n[i];
        }
    }



    current = temp;
    path1.push(current);
    closedNodes.push(current);

    for (var i = 0; i < path1.length; i++) {
        path1[i].show(color(0, 0, 255));
    }



}






