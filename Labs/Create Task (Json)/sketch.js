//Jakob Hachigian-Kreutzer
//2/26/19
//Json Sort
var sortname = "state_name";
var data = [];
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
  //single call
  organize(sortname);
}


function draw() {
  //redraw background
  background(5, 5, 5);
  //calls
  //organize(sortname);
}


function organize(sortby){
  var temp;
  for (var i = 1; i < data.length; i++){
    for(var j = i; j > 0; j--){
      //add change sorting by command
      if(data[j][sortby] < data[j-1][sortby]){
        temp = data[j];
        data[j] = data[j-1];
        data[j-1] = temp;
      }
    }
  }
  check();
}


function check(){
  for(var i = 1; i < data.length; i++){
    console.log(data[i].name);
  }
}
