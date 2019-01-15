//Jakob Hachigian-Kreutzer
//1/9/19
//My Sort

//global variables

//measurements
var compares = 0
var swaps = 0;
//timer
var millisecondEnd = 0;
var milliseondStart = 0;
//original data set
var data = [];
dataNumbers = 20000;
//array of sorted data
var sorted = [];
//unsorted array of data
var unsorted = [];

function setup() {
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
  //copy data to unsorted array
  arrayCopy(data, unsorted, data.length);
  organize();
}

function draw() {
}

function organize(){
  millisecondStart = millis();
  for(var j = 0; j < data.length; j++){
    var max = unsorted[0]
    var maxIndex = 0
    for (var i = 1; i < unsorted.length; i++){
      compares++;
      if(unsorted[i] > max){
        maxIndex = i;
        max = unsorted[i];
        swaps++;
      }
    }
    sorted.push(max);
    unsorted.splice(maxIndex, 1);
  }
  millisecondEnd = millis();
  //prints final sorted array
  console.log(sorted);
  console.log(millisecondStart + " start");
  console.log(millisecondEnd + " end");
  console.log(swaps + " swaps");
  console.log(compares + " compares");
}
