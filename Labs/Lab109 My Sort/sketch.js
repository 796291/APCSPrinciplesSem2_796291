//Jakob Hachigian-Kreutzer
//1/9/19
//My Sort

//global variables

//original data set
var data = [1, 2, 3, 4, 5, 6];
//array of sorted data
var sorted = [];
//unsorted array of data
var unsorted = [];

function setup() {
  //copy data to unsorted array
  arrayCopy(data, unsorted, data.length);
  organize(data)
}

function draw() {
}

function organize(){
  for(var j = 0; j < data.length; j++){
    var max = unsorted[0]
    var maxIndex = 0
    for (var i = 1; i < unsorted.length; i++){
      if(unsorted[i] > max){
        maxIndex = i;
        max = unsorted[i];
      }
    }
    sorted.push(max);
    unsorted.splice(maxIndex);
  }
  //prints final sorted array
  console.log(sorted);
}
