//Adds the desired input to the screen for calculation
function addToResult(value){
    document.getElementById("result").value += value;
}

//Clears the result showing on the current screen
function clearResult(){
    document.getElementById("result").value = "";
}

//Calculates the value of the question posed
function calculate(){
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}