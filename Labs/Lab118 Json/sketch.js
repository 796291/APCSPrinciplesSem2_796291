//Jakob Hachigian-Kreutzer
//1/18/19
//Json Sort

var data = [];
function preload(){
  data = loadJSON("data.json");

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

function draw() {

}

function organize(){
  var temp;
  for (var i = 1; i < data.length; i++){
    for(var j = i; j > 0; j--){
      if(data[j] < data[j-1]){
        temp = data[j];
        data[j] = data[j-1];
        data[j-1] = temp;
        swaps++;
      }
    }
  }
}
