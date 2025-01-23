console.log("☃️ Loadeds!")

const stage = document.querySelector("body");
const mySnowy = document.getElementById("Snowy");

//Sounds
const swoosh = new Audio ("sound/christmas-whoosh_3-264376.mp3" )

mySnowy.onclick = function(){
    this.classList.toggle("move");
    swoosh.play();

}
stage.addEventListener("click",function(event){
    console.log(event.clientX + " : " + event.clientY);

    //var coords = "translateX("+event.clientX+"px) translate("+event.clientY+"px)";
    //"" '' ``
    var coords = `translateX(${event.clientX}px) translateY(${event.clientY}px)`;
    mySnowy.style.transform = coords;
})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {

    var style = window.getComputedStyle(mySnowy);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;
    var coords;

    //left arrow 
     if(event.keyCode =="37") {
     coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
    mySnowy.style.transform = coords ; 
}

    //right arrow
    if(event.keyCode =="38"){
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        mySnowy.style.transform = coords;
    
    }   
    //up arrow
    if(event.keyCode =="39"){
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        mySnowy.style.transform = coords;
    }

    //down arrow
    if(event.keyCode =="40"){
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        mySnowy.style.transform = coords;
    
    }   
        
    }

//ES6
//mySnowy.onclick = () => {
//    mSnowy.classList.toggle("move");
//   }

function addMyObject(){
/* Custom Object */
let myObject = document.createElement("img");
myObject.src="img/Group 1.svg";
//myObject.style.width = "200px";
stage.append(myObject);
// read window's available width & height in px
let w = window.innerWidth;
let h = window.innerHeight;
// randomize new X & Y numbers within space limits
let randomX = Math.floor((Math.random()* w)+1);
let randomY = Math.floor((Math.random()* h)+1);



myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

setTimeout(() => { myObject.remove(); addMyObject(); }, 3000);

}
addMyObject();
/**
* Game update loop
*/

let characterCoordX;
let characterCoordY;
let objectCoordX;
let objectCoordY;

setInterval(() => {
    // console.log("update loop is running")
    characterCoordX = mySnowy.getBoundingClientRect().x;
    characterCoordY = mySnowy.getBoundingClientRect().y;

    //optional: move character coordinates to its center
    characterCoordX += 150; // half the width of the character
    characterCoordY += 177; // half the height of the character
    objectCoordX = mySnowy.getBoundingClientRect().x;
    objectCoordY = mySnowy.getBoundingClientRect().y;

    if((characterCoordX >= objectCoordX && characterCoordX <= objectCoordX + myObject.width)
&& (characterCoordY >= objectCoordY && characterCoordY <= objectCoordY + myObject.height)) {
        console.log("Hit!");
        objectAction();
    }
}, 50);

const bingSound = new Audio("sound/hahaha-251796.mp3");

function objectAction() {
   
    mySnowy.classList.add("happy");
    setTimeout(() => {
        mySnowy.classList.remove("happy");
    }, 1000);
    myObject.remove();
    bingSound.play();

}


