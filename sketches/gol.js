var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
  //print(grid.isValidPosition(0, 0));
  //print(grid.isValidPosition(-1, -1));
}


function draw () {
  background(250);
	
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
	
}


function mousePressed () {
	
//var randomColumn = floor(random(grid.numberOfColumns));
//var randomRow = floor(random(grid.numberOfRows));

//var randomCell = grid.cells[randomColumn][randomRow];
//var neighborCount = grid.getNeighbors(randomCell).length;

//print("cell at " + randomCell.column + ", " + randomCell.row + " has " + neighborCount + " neighbors");
	
	
	
	
//grid.updatePopulation();
//grid.updateNeighborCounts();
print(grid.cells)
	
}


class Grid {
  constructor (cellSize) {
    // update the contructor to take cellSize as a parameter
    // use cellSize to calculate and assign values for numberOfColumns and numberOfRows
    this.cellSize = cellSize;
    this.numberOfColumns = floor(width / this.cellSize);
    this.numberOfRows = floor(height / this.cellSize);
		
    this.cells = new Array(this.numberOfColumns);
    for (var column = 0; column < this.numberOfColumns; column ++) {
      this.cells[column] = new Array(this.numberOfRows);
    }

    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize)
      }
    }
    //print(this.cells)		
  }
	
	
	
    draw () {
      for (var column = 0; column < this.numberOfColumns; column ++) {
        for (var row = 0; row < this.numberOfRows; row++) {
         this.cells[column][row].draw()
        }
      }
    }
	
	
	
    randomize () {
      for (var column = 0; column < this.numberOfColumns; column ++) {
        for (var row = 0; row < this.numberOfRows; row++) {
          var value = floor(random(2));
          this.cells[column][row].setIsAlive(value);
        }
      }
    }


    updateNeighborCounts () {
      for (var column = 0; column < this.numberOfColumns; column ++) {
        for (var row = 0; row < this.numberOfRows; row++) {
	  var currentCell = this.cells[column][row];
	  currentCell.liveNeighborCount = 0;
					
	  var neighborsPal = this.getNeighbors(currentCell)
	  for (var cp in neighborsPal){
	    if (neighborsPal[cp].isAlive){
	      currentCell.liveNeighborCount += 1;
            } 		
          }			
	}
      }
    }
    
	
    getNeighbors (currentCell) {
      var neighbors = [];
			
      for (var xOffset = -1; xOffset <= 1; xOffset++) {
        for (var yOffset = -1; yOffset <= 1; yOffset++) {
          var neighborX = currentCell.column + xOffset;
          var neighborY = currentCell.row + yOffset;
					
	  if (this.isValidPosition(neighborX, neighborY)) {
	    var neighborCell = this.cells[neighborX][neighborY]; 

	  if (neighborCell != currentCell) {
	    neighbors.push(neighborCell)
	    }
          }	
        }
      }
      return neighbors;
    }
	
	
  isValidPosition (column, row) {
    var validX = column >= 0 && column < this.numberOfColumns;
    var validY = row >= 0 && row < this.numberOfRows;

    return validX && validY
  }


  updatePopulation () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].liveOrDie()
          }
        }
      }
    }


class Cell {
  constructor(column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
    this.liveNeighborCount = 0;
  }
	
	
	
  draw () {
    
    if (this.isAlive) {
      fill(color(200,0,200));
    } else {
      fill(color(240));
    }
    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }


  setIsAlive (value) {
    if (value) {
      this.isAlive = true;
    } else {
     this.isAlive = false;
   }
//print(value)
}


  liveOrDie () { 
    if (this.isAlive && this.liveNeighborCount < 2) {
      this.isAlive = false;
    } else if (this.isAlive && this.liveNeighborCount > 3) {
      this.isAlive = false;
    } else if (this.isAlive == false && this.liveNeighborCount == 3) {
      this.isAlive = true;
    }
  }
}
