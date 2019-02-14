//Jakob Hachigian-Kreutzer
//1/18/19
//Json Sort

var data = [];
var sortBy = "total";
var bigTotal = 0;

function preload(){
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  bubble();
}

function draw() {
}

function bubble(){
  var temp;
  if(sortBy = "total"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  if(sortBy = "females"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].females < data.countrydata[j-1].females){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  if(sortBy = "males"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].males < data.countrydata[j-1].males){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  console.log(data);
  representCircle();
}

function representCircle(){
  for(var i = 1; i < data.countrydata.length; i++){
    bigTotal = bigTotal + data.countrydata[i].total;
  }
  var lastAngle = 0;
  for(var i = 0; i < data.countrydata.length; i++){
    var angle = ((data.countrydata[i].total / bigTotal) * (2 * PI));
    fill(10, 5*i, 10);
    arc(200, 200, 200, 200, lastAngle, lastAngle + angle);
    lastAngle += angle;
  }
}
