//CreateTask:Sort
function insertionSort(array, status, settings){
  this.data = array;
  //status changes depending on keypressed
  this.status = status;
  //how data is going to be displayed
  this.settings = settings;
  
  this.run = function(){
  //will change depending on status and will tell render what to draw
    this.update();
  //sorting method
    this.organize();
  //will draw data needing to be represented
    this.render();
  }

  this.update = function(){

  }

  this.render = function(){
    function check(){
      for(var i = 1; i < data.length; i++){
        console.log(this.data[i].name);
      }
    }
  }

  this.organize = function(){
    var temp;
    for (var i = 1; i < this.data.length; i++){
      for(var j = i; j > 0; j--){
        //add change sorting by command
        if(this.data[j][this.status] < this.data[j-1][this.status]){
          temp = this.data[j];
          this.data[j] = this.data[j-1];
          this.data[j-1] = temp;
        }
      }
    }
  }

}
