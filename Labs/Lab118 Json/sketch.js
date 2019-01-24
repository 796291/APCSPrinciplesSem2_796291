//Jakob Hachigian-Kreutzer
//1/18/19
//Json Sort

var data = [];

function preload(){
  data = loadJSON("data.json");
}

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
  for (var i = 1; i < data.countrydata.length; i++){
    for(var j = i; j > 0; j--){
      if(data.countrydata[j].total < data.countrydata[j-1].total){
        temp = data.countrydata[j];
        data.countrydata[j] = data.countrydata[j-1];
        data.countrydata[j-1] = temp;
        swaps++;
      }
    }
  }
  console.log(data);
}
