//Jakob Hachigian-Kreutzer
//1/11/19
//Insertion Sort

//global variables
//measurements
var compares = 0
var swaps = 0;
//timer
var millisecondEnd = 0;
var milliseondStart = 0;

var data = [9, 2, 7, 3, 1, 6, 4];

function setup(){
  organize();
}

function draw(){
}

function organize(){
  var temp;
  millisecondStart = millis();
  for (var i = 1; i < data.length; i++){
    for(var j = i; j > 0; j--){
      compares++;
      if(data[j] < data[j-1]){
        temp = data[j];
        data[j] = data[j-1];
        data[j-1] = temp;
        swaps++;
      }
    }
  }
  millisecondEnd = millis();
  //prints final sorted array
  console.log(data);
  console.log(millisecondStart + " start");
  console.log(millisecondEnd + " end");
  console.log(swaps);
  console.log(compares);
}
