//Jakob Hachigian-Kreutzer
//1/10/19
//Bubble Sort

//global variables
var timer = millis();
var data = [1, 4, 5, 9, 90, 81];


function setup() {
  //remove blank black screen
  noCanvas();
  bubbleSort(data);
}

function draw() {
}

function bubbleSort(data) {
    var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            var a = data[j];
            var b = data[j+1];
            if(a > b) {
                //swap variables (use temp variable)
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    console.log(data);
    console.log(timer);
}
