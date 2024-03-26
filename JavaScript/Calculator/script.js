const NUM1 = document.getElementById("n1");
const NUM2 = document.getElementById("n2");
const RES = document.getElementById("res");

function sum(){
    let result = +(NUM1.value) + +(NUM2.value);
    display(result);
}

function subract(){
    let result = +(NUM1.value) - (NUM2.value);
    display(result);
}

function multiply(){
    let result = +(NUM1.value)*(NUM2.value);
    display(result);
}

function divide(){
    let result = +(NUM1.value)/(NUM2.value);
    display(result);
}
function display(val){
    RES.textContent = val;
}