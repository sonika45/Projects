const calculate = document.querySelectorAll("#display");
function appendToResult (input){
    display.value += input
}
function clearResult(){
    display.value = "";
}
function calculateResult (){
    display.value = eval(display.value)
}
function deleteLast() {
    // let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
