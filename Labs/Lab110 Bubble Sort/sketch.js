//Jakob Hachigian-Kreutzer
//1/10/19
//Bubble Sort

//global variables
//measurements
var compares = 0;
var swaps = 0;
//timer
var millisecondEnd;
var milliseondStart;
var difference;

var data = [];
var dataNumbers = 20000


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //remove blank black screen
  fill(20, 30, 15);;
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
    difference = millisecondEnd - millisecondStart;
    console.log(data);
    console.log(millisecondStart + " start");
    console.log(millisecondEnd + " end");
    console.log(difference + " difference");
    console.log(swaps + " swaps");
    console.log(compares + " compares");
}
