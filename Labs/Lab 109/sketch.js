//Jakob Hachigian-Kreutzer
//1/9/19
//Sorting

//global variables
var data = [1, 2, 3, 4, 5, 6];
var sorted = [];
var unsorted = [];

function setup() {
  //canvas
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //
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
  console.log(sorted);
}
