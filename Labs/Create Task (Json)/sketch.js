
var sortname = "name";
var settings = "sort";
var data = [];
var gov;

function preload(){
  data = loadJSON("governers.json");
}

function setup(){
  //canvas
  var cnv = createCanvas(1200, 1300);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  //text
  textSize(15);
  textAlign(CENTER, CENTER);
  organize(sortname);
}

function draw(){
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
  //check();
  drawWords();
}


function check(){
  for(var i = 1; i < data.length; i++){
    console.log(data[i][sortname]);
  }
}


function drawWords(){
  //instructions
  //rect holding all instructions
  if(settings === "sort"){
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
    text("The program is built around the idea that everyone should have easy access to their political representatives.", 50, 50)
    text("Thus, the governors of each state are shown in a list below.The govenors are followed by their state, political party, and contact website.", 50, 75)
    text("Clicking on any of the headers (Governor, State, Party, or Contact) will sort the list accoording to that information alphabetically.", 50, 100)
    text("Additionally, the name of a governor can be selected from the list and a more indepth catalog of information will be shown.", 50, 125)
    text("To return to the full list after selecting a single governor, select the BACK button in the top right of the canvas.", 50, 150);
  }
  //titles (certain settings)
  if(settings === "sort"){

    //rect (same as below)
    fill(0, 0, 0);
    tint(255, 255);
    rect(45, 210, 160, 20);
    rect(245, 210, 160, 20);
    rect(445, 210, 160, 20);
    rect(645, 210, 160, 20);
    tint(255, 0);
    //titles
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
  if(settings === "sort"){
    var rectWidth = 160;
    var rectHight = 20;
    for(var i = 1; i < data.length; i++){
      var rectX = 45;
      var rectYbase = 210;
      if((mouseX > rectX) && (mouseX < rectX + rectWidth) && (mouseY > rectYbase + (i*20)) && (mouseY < rectYbase + (i*20) + rectHight)){
        //open specific governers page
        settings = "bio";
        governorPage(i);
      }
    }
    //governors
    var govX = 45;
    var stateX = 245;
    var partyX = 445;
    var contactX = 645;
    if((mouseX > govX) && (mouseX < govX + rectWidth) && (mouseY > 210) && (mouseY < 210 + rectHight)){
      sortname = "name"
      background(0);
      organize(sortname);
    }
    //state
    if((mouseX > stateX) && (mouseX < stateX + rectWidth) && (mouseY > 210) && (mouseY < 210 + rectHight)){
      sortname = "state_name"
      background(0);
      organize(sortname);
    }
    //party
    if((mouseX > partyX) && (mouseX < partyX + rectWidth) && (mouseY > 210) && (mouseY < 210 + rectHight)){
      sortname = "party"
      background(0);
      organize(sortname);
    }
    //contact
    if((mouseX > contactX) && (mouseX < contactX + rectWidth) && (mouseY > 210) && (mouseY < 210 + rectHight)){
      sortname = "contact_page"
      background(0);
      organize(sortname);
    }
  }
  //BACK [only in bio screen]
  if(settings === "bio"){
    var backX = 1200-102;
    var backY = 10;
    if((mouseX > backX) && (mouseX < backX+63) && (mouseY > backY) && (mouseY < backY+25)){
      settings = "sort";
      background(0);
      sortname = "name";
      organize(sortname);
      console.log("back");
    }
  }
}

function governorPage(number){
  if(settings === "bio"){
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
    var bio = data[number].biography;
    text(bio, 50, 375, 1200-100);
    textAlign(CENTER);
    textSize(20);
    textStyle(BOLD);
    text("CONTACTS", 1200/2, 200);
    text("BIOGRAPHY", 1200/2, 350);

    //back button
    fill(0);
    tint(255, 255);
    stroke(255, 0, 0);
    rect(1200-102, 10, 63, 25);
    tint(255, 0);
    fill(255);
    noStroke();
    textAlign(LEFT);
    text("BACK", 1200-100, 25);
  }
}
