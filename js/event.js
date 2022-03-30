


function makegreen() {
    document.body.style.backgroundColor = "red";
  }




const blueButton = document.getElementById('bluebutton');
blueButton.onclick=makeB;

function makeB(){

    document.body.style.backgroundColor='blue';
}


//use direct function

const green = document.getElementById("make-green");

green.onclick=function(){
  document.body.style.backgroundColor="green";}