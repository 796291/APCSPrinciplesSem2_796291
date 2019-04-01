//CreateTask:Sketch

//Global Variables
var sortname = "state_name";
var data = [];
var dataLoad;
//Preload
function preload(){
  data = loadJSON("governers.json");
}


function setup() {
  //canvas
  var cnv = createCanvas(1000, 2250);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //text
  textSize(10);
  textAlign(CENTER, CENTER);
  //
  var dataSorted = new insertionSort(data);
  dataSorted.run();
}

function draw() {
  //redraw background [Needed for when changing what is shown on canvas]
  background(5, 5, 5);
  //calls
  //organize(sortname);
}
