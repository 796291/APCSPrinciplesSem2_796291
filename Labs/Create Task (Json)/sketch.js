//Jakob Hachigian-Kreutzer
//Create Task
var sort = "country";
var data = [];
function preload(){
  data = loadJSON("population.json");
}


function setup() {
  //canvas
  var cnv = createCanvas(1000, 2250);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //text
  textSize(10);
  textAlign(CENTER, CENTER);
  //directions
  console.log("c: sort by country")
  console.log("t: sort by total")
  console.log("m: sort by males")
  console.log("f: sort by females")
}


function draw() {
  //redraw background
  background(5, 5, 5);
  //calls
  organize(sort);
}


function organize(sortby){
  var temp;
  for (var i = 1; i < data.countrydata.length; i++){
    for(var j = i; j > 0; j--){
      //add change sorting by command
      if(data.countrydata[j][sortby] < data.countrydata[j-1][sortby]){
        temp = data.countrydata[j];
        data.countrydata[j] = data.countrydata[j-1];
        data.countrydata[j-1] = temp;
      }
    }
  }
  drawWords();
  //check();
  bars();
}


function drawWords(){
  textAlign(LEFT);
  //titles
  fill(255, 255, 255);
  text("Countries", 100, 10);
  text("Totals", 300, 10);
  text("Males", 500, 10);
  text("Females", 700, 10);
  //names
  fill(255, 0, 0);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].country, 100, 10 + (i*10));
  }
  //total
  fill(0, 255, 0);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].total, 300, 10 + (i*10));
  }
  //male
  fill(0, 0, 255);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].males, 500, 10 + (i*10));
  }
  //female
  fill(0, 0, 255);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].females, 700, 10 + (i*10));
  }
}


function check(){
  for(var i = 1; i < data.countrydata.length; i++){
    console.log(data.countrydata[i].total);
  }
}

function bars(){
  var allTotal = 0;
  var allMale = 0;
  var allFemale = 0;
  for(var i = 1; i < data.countrydata.length; i++){
    allTotal = allTotal + data.countrydata[i].total;
    allMale = allMale + data.countrydata[i].males;
    allFemale = allFemale + data.countrydata[i].females;
  }
  //total
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].total / allTotal) * (100);
    fill(0, 255, 0);
    rect(350, 10 + (i*10), size*5, 10);
  }
  //male
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].males / allMale) * (100);
    fill(0, 0, 255);
    rect(550, 10 + (i*10), size*5, 10);
  }
  //female
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].females / allFemale) * (100);
    fill(0, 0, 255);
    rect(750, 10 + (i*10), size*5, 10);
  }
}


function keyPressed(){
  //c; country
  if(keyCode === 67){
    sort = "country";
  }
  //t; total
  if(keyCode === 84){
    sort = "total";
  }
  //m; male
  if(keyCode === 77){
    sort = "males";
  }
  //f; female
  if(keyCode === 70){
    sort = "females";
  }
}
