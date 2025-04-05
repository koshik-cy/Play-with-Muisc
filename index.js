// alert("working");

function switchFunction(expression){

    switch(expression){
        case 'w':    var audio = new Audio('sounds/tom-4.mp3');
                         audio.play();
                         break;
        case 'a':    var audio = new Audio('sounds/tom-3.mp3');
                         audio.play();
                         break;
        case 's':    var audio = new Audio('sounds/tom-2.mp3');
                         audio.play();
                         break;
        case 'd':    var audio = new Audio('sounds/tom-1.mp3');
                         audio.play();
                         break;
        case 'j':    var audio = new Audio('sounds/snare.mp3');
                         audio.play();
                         break; 
        case 'k':    var audio = new Audio('sounds/kick-bass.mp3');
                         audio.play();
                         break; 
        case 'l':    var audio = new Audio('sounds/crash.mp3');
                         audio.play();
                         break;                 
        default :
            console.log(expression);
          }

}

function addAnimation(elementHtml)
{
    var queryClass=document.querySelector("."+elementHtml);

    queryClass.classList.add("pressed");
    setTimeout(function(){queryClass.classList.remove("pressed")},100);

}

//detcting buttonPress
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() { //adding event to elements with click class

    // this.style.color="#fff";  //this points to the currently clicked id

      var buttonhtml = this.innerHTML;
      switchFunction(buttonhtml);
      addAnimation(buttonhtml);
     
    // alert("I got clicked");
//     var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
    // var audio= new Audio('sounds/crash.mp3');
    // audio.play();

});
}




//detecting keyPress
document.addEventListener("keypress",function(event){  //adding event to entire document
   var keyElem=event.key;
   switchFunction(keyElem);
   addAnimation(keyElem);

})



/*
handleClick
function handleClick() {
    alert("I got clicked");
}

// Note the difference between the handleClick and handleClick() in the addEventListener 
// if parentesis the it is called as soon as the script loaded and without 
// paranthesis it will be called on occuring the event

anonymous functions.=== without parenthesis


fun a(val){}
fun b(val){}

var c=a;

fun d()
{
    return c(2);  //Higher order functions
}

*/


/*

objects
var ob={
    name:"ravi",  --notice the strings
    age:22,
    prevwork:["onef","twof"]
}


function HouseKeeper(name,experience,goodat){
    this.name=name,
    this.experience=experience
    this.goodat=goodat;
    this.clean = function () {
         alert("cleaning in progress");
    }---note this to use functions in the 
}

var house1 = new Hk(22,"jessi",["cleaning","ironing"]);
console.log(house1);


*/