var grid = new Array(cols, rows);
var cols;
var rows;
var resolution = 20;
var newGrid = new Array(cols, rows);

function makeSchoolArray(cols, rows){
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++){
	arr[i] = new Array(rows);

  }
  return arr;
}


function setup (){
  createCanvas(600, 400);
  //this will calculate and create the size of each
  //square based on the canvas

  cols = width / resolution;
  rows = height / resolution;

  //grid = makeSchoolArray(cols, rows);
  grid;
  for (var i = 0; i < cols; i++){
	for(var j = 0; j < rows; j++){
	grid[i][j] = floor(random(2));
  	}
  }
}


function draw (){
  background (0);
  for (var i = 0; i < cols; i++){
	for (var j = 0; j < rows; j++){
  	if (grid[i][j] == 1){
    	fill(255);
    	stroke(0);
    	rect(i * resolution, j * resolution, resolution - 1, resolution - 1);
  	}
	}
  }


  //compute(calculate) next grid
  var next = makeSchoolArray(cols, rows);

  for (var i = 0; i < cols; i++){
      for (var j = 0; j < rows; j++){

    	//edges
     	 if (i == 0 || i == cols -1 || j == 0 || j == rows - 1){
     		 next[i][j] = grid [i][j]
     	 }else {

    	//count live neaighbors
     		 var sum = 0;
     		 var neighbors = countMakeSchoolNeighbors(grid, i, j);
     		 var state = grid[i][j];
     		 if (state == 0 && neighbors == 3){
     			 next[i][j] = 1;
     		 }else if (state == 1 && (neighbors < 2 || neighbors > 3)){
     			 next[i][j] = 0;
     		 }else{
     			 next[i][j] = state;
     		 }
  	}
      }
	grid = next;
  }


function countMakeSchoolNeighbors(grid, x, y){
   var sum = 0;
   for (var i = -1; i < 2; i++){
	 for (var j = -1; j <2; j++){
    	sum += grid[x + i][y + j];
	 }
   }
   sum -= grid[x][y];
   return sum;
 }
}

