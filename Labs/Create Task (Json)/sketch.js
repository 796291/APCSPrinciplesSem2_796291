//CreateTask: Sketch

var sortname = "name";
var settings = "sort";
var data = [];
var gov;

var font1;


function preload(){
  data = loadJSON("governers.json");
  font1 = loadFont("TrajanusBricks.ttf");
  font2 = loadFont("TrajanusBricksXtra.ttf");
}


function setup(){
  //canvas
  var cnv = createCanvas(1200, 1300);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  //text
  textSize(15);
  textAlign(CENTER, CENTER);
  //default font = font1
  //textFont(font1);
  //
  //TEMP CALL HERE
  organize(sortname);
}


function draw(){
  //redraw background
  //background(5, 5, 5);
  //calls

  //organize(sortname)
}


function organize(sortby){
  var temp;
  for(var i = 1; i < data.length; i++){
    for(var j = i; j > 0; j--){
      if(data[j][sortby] < data[j-1][sortby]){
        temp = data[j];
        data[j] = data[j-1];
        data[j-1] = temp;
      }
    }
  }
  //only have check active when calling in setup
  //(otherwise write in console infinitely)
  //check();
  //call to represent data
  drawWords();
  //call to give options to change which data / how its shown
}


function check(){
  for(var i = 1; i < data.length; i++){
    console.log(data[i][sortname]);
  }
}


function drawWords(){
  //instructions
  //rect holding all instructions
  fill(0, 0, 0);
  stroke(255, 255, 255);
  rect(10, 10, 1200-20, 200 - 20);
  noStroke();

  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 255);
  textSize(25);
  text("INSTRUCTIONS", 1200/2, 25);
  textSize(15);
  textStyle(NORMAL);
  textAlign(LEFT);
  text("There are three different modes with which to represent data. Choose on here:",50, 50)
  fill(255, 0, 0);
  textStyle(BOLD);
  text("SORT", 1120/2, 50);
  text("GROUP", 1223/2, 50);
  text("RAW", 1350/2, 50);
  fill(255, 255, 255);
  textStyle(NORMAL);
  text("In SORT mode, click on the different headers to sort the list by that item.", 50, 75)
  text("With GROUP mode, senators will be grouped together based on shared features. Click on the different headers to group by that item.", 50, 100)
  text("RAW mode will simply provide a raw list of the senators with no other information. This mode will also provide a search bar to allow users to search specific governers.", 50, 125)
  text("At any point in time and in with settings, a governors name came be selected and additional information will be displayed.", 50, 150);

  //titles (certain settings)
  if((settings = "sort") && (sortname = "name")){
    textAlign(LEFT);
    textStyle(BOLD);
    fill(255, 255, 255);
    text("Governor", 50, 220);
    text("State", 250, 220);
    text("Party", 450, 220);
    text("Contact", 650, 220);
    textStyle(NORMAL);

    for(var i = 1; i < data.length; i++){
      textSize(15);
      //GOVENORS
      //transparent rectangle around names
      fill(0, 0, 0);
      tint(255, 255);
      rect(45, 210 + (i*20), 160, 20);
      tint(255, 0);
      //actually names
      fill(255, 0, 0);
      text(data[i].name, 50, 220 + (i*20));
      //State
      fill(0, 255, 0);
      text(data[i].state_name, 250, 220 + (i*20));
      //Party
      fill(0, 0, 255);
      text(data[i].party, 450, 220 + (i*20));
      //Contact
      fill(255, 255, 0);
      textSize(10);
      text(data[i].contact_page, 650, 220 + (i*20));
    }
  }


}

function mousePressed(){
  for( var i = 1; i < data.length; i++){
    var rectX = 45;
    var rectWidth = 160;
    var rectYbase = 210;
    var rectHight = 20;
    if((mouseX > rectX) && (mouseX < rectX + rectWidth) && (mouseY > rectYbase + (i*20)) && (mouseY < rectYbase + (i*20) + rectHight)){
      //open specific governers page
      settings = "bio";
      governorPage(i);
    }
  }
}

function governorPage(number){
  if(settings == "bio"){
    background(0, 0, 0);
    textAlign(CENTER);
    textSize(25);
    textStyle(BOLD);
    fill(255);
    text(data[number].name, 1200/2, 25);

    textAlign(LEFT);
    textSize(15);
    textStyle(NORMAL);
    var nameS = data[number].state_name;
    var nameShort = data[number].state_code;
    text("STATE: " + nameS + ", " + nameShort, 50, 50);
    var belief = data[number].religion;
    var sex = data[number].gender;
    var race = data[number].ethnicity;
    text("CHARACTERISTICS: " + sex + ", " + race + ", " + belief, 50, 75);
    var birth = data[number].date_of_birth;
    text("BIRTH: " + birth + " (Y, M, D)", 50, 100);
    var tStart = data[number].entered_office;
    text("ENTERED OFFICE: " + tStart, 50, 125);
    var tEnd = data[number].term_end;
    text("TERM END: " + tEnd, 50, 150);
    var address = data[number].address_complete;
    text("ADDRESS: " + address, 50, 175);
    var phone = data[number].phone;
    text("PHONE: " + phone, 50, 225);
    var website = data[number].website;
    text("WEBSITE: " + website, 50, 250);
    var contact = data[number].contact_page;
    text("CONTACT PAGE: " + contact, 50, 275);
    var facebook = data[number].facebook_url;
    text("FACEBOOK: " + facebook, 50, 300);
    var twitter = data[number].twitter_url;
    text("TWITTER: " + twitter, 50, 325);
    textAlign(CENTER);
    textSize(20);
    textStyle(BOLD);
    text("CONTACTS", 1200/2, 200);
  }
  //back button?
}
