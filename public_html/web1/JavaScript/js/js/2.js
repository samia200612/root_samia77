console.log("JS 2 is loaded")

//Step 1- selecting your element 

const myTriangle = document.getElementById("triangle-right")

//Step 2 - adding a click event 

//myTriangle.addEventListener("click,function"){
//
//});

myTriangle.addEventListener("click",()=> {
   //myTriangle.style.bordersLeft="100px solid blue"
myTriangle.classList.add("change-me")

})

