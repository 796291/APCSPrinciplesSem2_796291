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
  barGraph();
}

//function representCircle(){
//  for(var i = 1; i < data.countrydata.length; i++){
//    bigTotal = bigTotal + data.countrydata[i].total;
//  }
//  var lastAngle = 0;
//  for(var i = 0; i < data.countrydata.length; i ++){
//    var angle = ((data.countrydata[i].total / bigTotal) * (2 * PI));
//    fill(0, 0, 10*i);
//    arc(300, 300, 500, 500, lastAngle, lastAngle + angle);
//    lastAngle += angle
//  }
//}

function barGraph() {
  var width = 200, // canvas width and height
      height = 350,
      margin = 20,
      w = width - 2 * margin, // chart area width and height
      h = height - 2 * margin;

  var barWidth =  (h / data.countrydata.length) * 0.8; // width of bar
  var barMargin = (h / data.countrydata.length) * 0.2; // margin between two bars

  createCanvas(width, height);

  textSize(14);

  push();
  translate(margin, margin); // ignore margin area

  for(var i=0; i < data.countrydata.length; i++) {
    console.log("in")
    push();
    fill('steelblue');
    noStroke();
    translate(0, i* (barWidth + barMargin)); // jump to the top right corner of the bar
    rect(0, 0, data.countrydata[i], barWidth); // draw rect

    fill('#FFF');
    text(data.countrydata[i], 5, barWidth/2 + 5); // write data

    pop();
  }

  pop();
}
