//Jakob Hachigian-Kreutzer
//2/26/19
//Json Sort

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
  //calls
  organize();
}


function draw() {
}


function organize(){
  var temp;
  for (var i = 1; i < data.countrydata.length; i++){
    for(var j = i; j > 0; j--){
      //add change sorting by command
      if(data.countrydata[j].country < data.countrydata[j-1].country){
        temp = data.countrydata[j];
        data.countrydata[j] = data.countrydata[j-1];
        data.countrydata[j-1] = temp;
      }
    }
  }
  drawWords();
  check();
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
    console.log(size + "size");
    fill(0, 255, 0);
    rect(350, 10 + (i*10), size*5, 10);
  }
  //male
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].males / allMale) * (100);
    console.log(size + "size");
    fill(0, 0, 255);
    rect(550, 10 + (i*10), size*5, 10);
  }
  //female
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].females / allFemale) * (100);
    console.log(size + "size");
    fill(0, 0, 255);
    rect(750, 10 + (i*10), size*5, 10);
  }
}
