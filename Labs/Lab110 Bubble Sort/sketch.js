//Jakob Hachigian-Kreutzer
//1/10/19
//Bubble Sort

//global variables
//measurements
var compares = 0
var swaps = 0;
//timer
var millisecondEnd = 0;
var milliseondStart = 0;

var data = [];
var dataNumbers = 20000


function setup() {
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
  //remove blank black screen
  noCanvas();
  bubbleSort(data);
}

function draw() {
}

function bubbleSort(data) {
  millisecondStart = millis();
  var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            var a = data[j];
            var b = data[j+1];
            compares++;
            if(a > b) {
                //swap variables (use temp variable)
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                swaps++;
            }
        }
    }
    millisecondEnd = millis();
    console.log(data);
    console.log(millisecondStart + " start");
    console.log(millisecondEnd + " end");
    console.log(swaps + " swaps");
    console.log(compares + " compares");
}
