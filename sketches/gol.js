var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(100);
  
  //var array = [0, 1, 2];
  
  //for (var i = -1; i < array.length; i ++) {
	//if (i >= 0) {
     //print(array[i]); 
    //}
  //}
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

    //print(this.cells);
  }
  updateNeighborCounts () {
  // for each cell in the grid
  // reset it's neighbor count to 0
  // for each of the cell's neighbors, if it is alive add 1 to neighborCount
    for (var xOffset = -1; xOffset <= 1; xOffset++) {
      for (var yOffset = -1; yOffset <= 1; yOffset++) {
        var neighborX = currentCell.column + xOffset;
        var neighborY = currentCell.row + yOffset;
        //var sQuares = this.NeighborHood[xOffset][yOffset];
        //count all neighbors that ARE ALIVE and DO NOT count its self
        if ()
        
        
        //&& sQuares[neighborX][neighborY] == currentCell
        //if (sQuares[xOffset][yOffset] == false ){
          //liveNeighborCount += 1;
        //}
        
        print(currentCell.liveNeighborCount)
    }
      
      
  }
    
}
  updatePopulation () {
  
  }

  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var cell = this.cells[column][row];

        cell.draw();
      }
    }
  }
  
  randomize() {
    
  }
}


class Cell {
  constructor (column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
    this.liveNeighborCount = 0;
    var isAlive = floor(random(2));
    
    if (isAlive == 0){
//      this.isAlive = false;
      this.setIsAlive(false);
    } else {
//      this.isAlive = true;
      this.setIsAlive(true);
    }
  }

  draw () {
    
    if (this.isAlive) {
      fill(255);
    } else {
      fill(0,255,0);
    }

    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }
   
  setIsAlive (isAlive) {
    this.isAlive = isAlive;
  }
  
  liveOrDie () {
  
  }
}

function makeSchoolArray(cols, rows){
  var arr = new Array(cols);

  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}
