


function makegreen() {
    document.body.style.backgroundColor = "red";
  }




const blueButton = document.getElementById('bluebutton');
blueButton.onclick=makeB;

function makeB(){

    document.body.style.backgroundColor='blue';
}



//handle event anonymous function
const green = document.getElementById("make-green");
green.onclick=function(){
  document.body.style.backgroundColor="green";}


  //hot pink  2 step
const hotpink=document.getElementById('make-hotpink');
console.log(hotpink);
 hotpink.addEventListener('click',function(){
document.body.style.backgroundColor='hotpink';

 })

 //direct addEcentLisener 1 step
 document.getElementById("make-lightblue").addEventListener('click',function(){
   document.body.style.backgroundColor='lightblue';
 })
