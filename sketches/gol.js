var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  
}

function draw () {
  background(0);

  grid.draw();
	grid.randomize();
  grid.updateNeighborCounts();
	//grid.updatePopulation();
	//grid.liveOrDie();
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
    //print("max")
    //print(this.cells);
  }
  updateNeighborCounts () {
  // for each cell in the grid
  // reset it's neighbor count to 0
  // for each of the cell's neighbors, if it is alive add 1 to neighborCount
		        
	for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var currentCell = this.cells[column][row];
        
		// count all the alive neighbors
        for (var xOffset = -1; xOffset <= 1; xOffset++) {
          for (var yOffset = -1; yOffset <= 1; yOffset++) {
            var neighborX = currentCell.column + xOffset;
            var neighborY = currentCell.row + yOffset;
            
			// cell 0, 0
            // check first if neighborX and neighborY are valid
            // if they are valid positions, check the neighhor
            // valid values are never negative, and not outside the size of the grid
            // else, do nothing
                        
            var validPosition = neighborX >= 0 && neighborY >= 0;
            if (validPosition) {
            	var neighborCell = this.cells[neighborX][neighborY]; 
              
			        if ( neighborCell.isAlive == true ){
				        currentCell.liveNeighborCount += 1;
              } 
            }
            print(currentCell.liveNeighborCount)
        }
      }
    }
  }
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
  mousePressed () {
    grid.randomize()
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
  
  
}

function makeSchoolArray(cols, rows){
  var arr = new Array(cols);

  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}
