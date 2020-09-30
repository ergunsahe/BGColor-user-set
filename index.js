const colors = [
    {name:"black",
    motto:"dark sky"
},
 {
     name:"red",
     motto:"fire rose"
 },

 {
     name:"blue",
     motto:" sky blue"
 },

 {
     name:"green",
     motto:"sea green"
 },

 {
     name:"yellow",
     motto:"sun ligth"
 }

];


const btn = document.querySelector("#btn");
const explanation = document.querySelector("#explanation");
const motto = document.querySelector("#motto");
const bodyElement = document.querySelector("body");
const userInput = document.querySelector("#userInput");
const info = document.querySelector("#info");


const setColor = document.querySelector("#setColor");
const mottoColor = document.querySelector("#mottoColor");

var bodyElementColor = 

btn.addEventListener("click", changeColor);
setColor.addEventListener("click", userColor)

function changeColor() {
    const randomIndex = Math.floor((Math.random()) * (+(colors.length)))
    bodyElement.style.backgroundColor = colors[randomIndex].name;
    if (bodyElement.style.backgroundColor === "black") {
        info.style.color = "white";
    } else {
        info.style.color = "black";
        info.style.fontWeight = "bold";
    }
    explanation.innerText = colors[randomIndex].name;
    mottoColor.innerText = colors[randomIndex].motto;

    // console.log(colors[randomIndex].name)
}

function userColor () {
    
    const userInputColor = userInput.value.split(":");
    // console.log(userInputColor)
    if (colors.findIndex(x => x.name === userInputColor[0])=== -1) {
        colors.push({name:userInputColor[0], motto:userInputColor[1]});
        
    };   
    // console.log(colors)
    bodyElement.style.backgroundColor = userInputColor[0];
    explanation.innerText = userInputColor[0];
    mottoColor.innerText = userInputColor[1];
    userInput.value = "";
    userInput.focus();
}

