//Jakob Hachigian-Kreutzer
//1/11/19
//Insertion Sort

//global variables
//measurements
var compares = 0;
var swaps = 0;
//timer
var millisecondEnd;
var milliseondStart;
var difference;

var data = [];
var dataNumbers = 20000;

function setup(){
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
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
  difference = millisecondEnd - millisecondStart;
  console.log(data);
  console.log(millisecondStart + " start");
  console.log(millisecondEnd + " end");
  console.log(difference + " difference");
  console.log(swaps + " swaps");
  console.log(compares + " compares");
}
