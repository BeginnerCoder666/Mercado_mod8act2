function addition() {
    var x = parseFloat(document.getElementById("number1").value);
    var y = parseFloat(document.getElementById("number2").value);
    let z = x + y;
    document.getElementById("answer").innerHTML = "The sum of " + x + " and " + y + " is " + z;
}
function subtraction() {
    var x = parseFloat(document.getElementById("number1").value);
    var y = parseFloat(document.getElementById("number2").value);
    let z = x - y;
    document.getElementById("answer").innerHTML = "The difference of " + x + " and " + y + " is " + z;
}
function multiplication() {
    var x = parseFloat(document.getElementById("number1").value);
    var y = parseFloat(document.getElementById("number2").value);
    let z = x * y;
    document.getElementById("answer").innerHTML = "The product of " + x + " and " + y + " is " + z;
}
function division() {
    var x = parseFloat(document.getElementById("number1").value);
    var y = parseFloat(document.getElementById("number2").value);
    let z = x / y;
    document.getElementById("answer").innerHTML = "The quotient of " + x + " and " + y + " is " + z;
}
function remainder() {
    var x = parseFloat(document.getElementById("number1").value);
    var y = parseFloat(document.getElementById("number2").value);
    let z = x % y;
    document.getElementById("answer").innerHTML = "The remainder of " + x + " divided by " + y + " is " + z;
}