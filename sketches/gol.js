var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(0);

  grid.draw();
}

class Grid {
  constructor (cellSize) {
    // update the contructor to take cellSize as a parameter
    // use cellSize to calculate and assign values for numberOfColumns and numberOfRows
    this.cellSize = cellSize;

    this.numberOfRows = floor(height / this.cellSize);
    this.numberOfColumns = floor(width / this.cellSize);

    this.cells = makeSchoolArray(this.numberOfColumns, this.numberOfRows)

    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize);
      }
    }

    print(this.cells);
  }

  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var cell = this.cells[column][row];

        cell.draw();
      }
    }
  }
}

var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(0);

  grid.draw();
}

class Grid {
  constructor (cellSize) {
    // update the contructor to take cellSize as a parameter
    // use cellSize to calculate and assign values for numberOfColumns and numberOfRows
    this.cellSize = cellSize;

    this.numberOfRows = floor(height / this.cellSize);
    this.numberOfColumns = floor(width / this.cellSize);

    this.cells = makeSchoolArray(this.numberOfColumns, this.numberOfRows)

    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize);
      }
    }

    print(this.cells);
  }

  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var cell = this.cells[column][row];

        cell.draw();
      }
    }
  }
}


class Cell {
  constructor (column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;

    this.isAlive = floor(random(2));
    
    if (this.isAlive == 0){
      isAlive = false;
    }else{
      isAlive = true;
    }
  }

  draw () {
    if (this.isAlive) {
      fill(255);
    } else {
      fill(255,0,0);
    }

    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }
  function setIsAlive (isAlive){
    var value = random() 
  
  }
}

function makeSchoolArray(cols, rows){
  var arr = new Array(cols);

  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}



// function setup (){
//   createCanvas(400, 400);
//   //this will calculate and create the size of each
//   //square based on the canvas

//   cols = width / resolution;
//   rows = height / resolution;

//   print("hello" + "goodbye")
//   print(cols + ", " + rows)

//   grid = makeSchoolArray(cols, rows);

//   print(grid);
//   // grid;

//   for (var i = 0; i < cols; i++){
//     for(var j = 0; j < rows; j++){
//       grid[i][j] = floor(random(2));
//     }
//   }
// }


// function draw (){
//   background (0);

//   for (var i = 0; i < cols; i++){
//     for (var j = 0; j < rows; j++){
//       if (grid[i][j] == 1){
//         fill(255);
//         stroke(0);
//         rect(i * resolution, j * resolution, resolution - 1, resolution - 1);
//       }
//     }
//   }


//   //compute(calculate) next grid
//   // var next = makeSchoolArray(cols, rows);

//   // for (var i = 0; i < cols; i++){
//   //   for (var j = 0; j < rows; j++){

//   //     //edges
//   //      if (i == 0 || i == cols -1 || j == 0 || j == rows - 1){
//   //        next[i][j] = grid [i][j]
//   //      } else {

//   //     //count live neaighbors
//   //        var sum = 0;
//   //        var neighbors = countMakeSchoolNeighbors(grid, i, j);
//   //        var state = grid[i][j];
//   //        if (state == 0 && neighbors == 3){
//   //          next[i][j] = 1;
//   //        }else if (state == 1 && (neighbors < 2 || neighbors > 3)){
//   //          next[i][j] = 0;
//   //        }else{
//   //          next[i][j] = state;
//   //        }
//   //   }
//   //     }
//   // grid = next;
// // }


// // function countMakeSchoolNeighbors(grid, x, y){
// //    var sum = 0;
// //    for (var i = -1; i < 2; i++){
// //      for (var j = -1; j <2; j++){
// //         sum += grid[x + i][y + j];
// //      }
// //    }

// //    sum -= grid[x][y];

// //    return sum;
// // }
// }

// function setup (){
//   createCanvas(400, 400);
//   //this will calculate and create the size of each
//   //square based on the canvas

//   cols = width / resolution;
//   rows = height / resolution;

//   print("hello" + "goodbye")
//   print(cols + ", " + rows)

//   grid = makeSchoolArray(cols, rows);

//   print(grid);
//   // grid;

//   for (var i = 0; i < cols; i++){
//     for(var j = 0; j < rows; j++){
//       grid[i][j] = floor(random(2));
//     }
//   }
// }


// function draw (){
//   background (0);

//   for (var i = 0; i < cols; i++){
//     for (var j = 0; j < rows; j++){
//       if (grid[i][j] == 1){
//         fill(255);
//         stroke(0);
//         rect(i * resolution, j * resolution, resolution - 1, resolution - 1);
//       }
//     }
//   }


//   //compute(calculate) next grid
//   // var next = makeSchoolArray(cols, rows);

//   // for (var i = 0; i < cols; i++){
//   //   for (var j = 0; j < rows; j++){

//   //     //edges
//   //      if (i == 0 || i == cols -1 || j == 0 || j == rows - 1){
//   //        next[i][j] = grid [i][j]
//   //      } else {

//   //     //count live neaighbors
//   //        var sum = 0;
//   //        var neighbors = countMakeSchoolNeighbors(grid, i, j);
//   //        var state = grid[i][j];
//   //        if (state == 0 && neighbors == 3){
//   //          next[i][j] = 1;
//   //        }else if (state == 1 && (neighbors < 2 || neighbors > 3)){
//   //          next[i][j] = 0;
//   //        }else{
//   //          next[i][j] = state;
//   //        }
//   //   }
//   //     }
//   // grid = next;
// // }


// // function countMakeSchoolNeighbors(grid, x, y){
// //    var sum = 0;
// //    for (var i = -1; i < 2; i++){
// //      for (var j = -1; j <2; j++){
// //         sum += grid[x + i][y + j];
// //      }
// //    }

// //    sum -= grid[x][y];

// //    return sum;
// // }
// }
