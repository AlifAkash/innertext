let input = document.getElementById("ip").value;
const btn = document.querySelector(".btn");
let output = document.getElementById("op");

btn.addEventListener("click", getOutput());

function getOutput(){
    output.innerHTML = input;   
}