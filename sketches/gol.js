var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
	grid.randomize();
}


function draw () {
  background(250);
  grid.draw();
}


function mousePressed () {
  //grid.updatePopulation();
	var randomColumn = floor(random(grid.numberOfColumns));
  var randomRow = floor(random(grid.numberOfRows));

  var randomCell = grid.cells[randomColumn][randomRow];
  var neighborCount = grid.getNeighbors(randomCell).length;

  print("cell at " + randomCell.column + ", " + randomCell.row + " has " + neighborCount + " neighbors");  
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
	updatePopulation () {
	  for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].liveOrDie()
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
			//print(this.cells)
		}
	
    getNeighbors (currentCell) {
      var neighbors = [];
			
      for (var xOffset = -1; xOffset <= 1; xOffset++) {
        for (var yOffset = -1; yOffset <= 1; yOffset++) {
          var neighborX = currentCell.column + xOffset;
          var neighborY = currentCell.row + yOffset;
					
					var neighborCell = this.cells[neighborX][neighborY]; 

					//if (neighborCell != currentCell) {
						//neighbors.push(currentCell)
					//}
        }				
      }
			
      return neighbors;
    }
	
	
	isValidPosition () {
		
	}

	
    draw () {
      for (var column = 0; column < this.numberOfColumns; column ++) {
        for (var row = 0; row < this.numberOfRows; row++) {
         this.cells[column][row].draw()
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
      fill(240);
    } else {
      fill(200,0,200);
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
		
	}
}
