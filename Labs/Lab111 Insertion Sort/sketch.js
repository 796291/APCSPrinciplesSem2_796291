//Jakob Hachigian-Kreutzer
//1/11/19
//Insertion Sort

//global variables
var data = [9, 2, 7, 3, 1, 6, 4];

function setup(){
  organize();
}

function draw(){
  console.log(data);
}

function organize(){
  var temp;
  for (var i = 1; i < data.length; i++){
    for(var j = 1; j > 0; j--){
      if(data[j] < data[j-1]){
        temp = data[j];
        data[j] = data[j-1];
        data[j-1] = temp;
      }
    }
  }
  console.log(data);
}
