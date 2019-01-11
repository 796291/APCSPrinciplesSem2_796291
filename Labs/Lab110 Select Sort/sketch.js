//Jakob Hachigian-Kreutzer
//1/10/19
//Select Sort

//global variables

//timer
var timer = millis();
//original data set
var data = [7, 8, 3, 2, 1, 9, 4];
//array of sorted data
var sorted = [];
//unsorted array of data
var unsorted = [];

function setup() {
  //copy data to unsorted array
  arrayCopy(data, unsorted, data.length);
  organize()
}

function draw() {
}

function organize(){
  for(var j = 0; j < data.length; j++){
    var min = unsorted[0]
    var minIndex = 0
    for (var i = 1; i < unsorted.length; i++){
      if(unsorted[i] < min){
        minIndex = i;
        min = unsorted[i];
      }
    }
    sorted.push(min);
    unsorted.splice(minIndex, 1);
  }
  //prints final sorted array
  console.log(sorted);
  console.log(timer);
}
