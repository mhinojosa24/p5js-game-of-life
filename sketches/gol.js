p5js.org

var grid;

​

function setup () {

  createCanvas(400, 400);

  grid = new Grid(100);

  

}

​

function draw () {

  background(0);

​

  grid.draw();

  grid.updateNeighborCounts();

  //grid.updatePopulation();

  //grid.liveOrDie();

}

​

class Grid {

  constructor (cellSize) {

    // update the contructor to take cellSize as a parameter

    // use cellSize to calculate and assign values for numberOfColumns and numberOfRows

    this.cellSize = cellSize;

    this.numberOfRows = floor(height / this.cellSize);

    this.numberOfColumns = floor(width / this.cellSize);

    this.cells = makeSchoolArray(this.numberOfColumns, this.numberOfRows)

​

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

