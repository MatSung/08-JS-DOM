"use strict";


//pirma uzduotis
//pushinti viena itema i array mygtuku

let array = [];
document.getElementById("button").addEventListener("click", pushinti);

function pushinti(){
    array.push(document.getElementById("input").value);
    console.log(array);
}

//kvadratine saknis


//trecia uzduotis
//sukurti diva su mygtuku
let counter = 0;
document.getElementById("divplusone").addEventListener("click", makeDiv);

function makeDiv(){
    var newDiv = document.createElement("div");
    newDiv.class = "div" + counter;
    counter++;
    document.body.appendChild(newDiv);
}

//sukurti objekta kvadratas

// let kvadratas = {
//     a,
//     b
// };


//labiau staciakampis negu kvadratas :D
function Kvadratas(a,b){
    this.a = a;
    this.b = b;

    this.perimetras = function (){
        return ((this.a + this.b) * 2);
    }

    this.plotas = function (){
        return (this.a * this.b);
    }
}

let kvadras = new Kvadratas(4,6);

document.getElementById("makerect").addEventListener("click", makeRect);


let rectArray = [];
let counter2 = 0;

function makeRect(){

    //pasiimu ilgi ir ploti
    let ilgis = document.getElementById("inputa").value;
    let plotis = document.getElementById("inputb").value;

    //naujas objektas
    rectArray[counter2] = new Kvadratas(ilgis, plotis);

    //naujas elementas
    var newRect = document.createElement("div");
    newRect.class = "rectangle";
    newRect.style.width = ilgis + "px";
    newRect.style.height = plotis + "px";
    document.body.appendChild(newRect);
}

//nespejau daugiau buvau isvykes