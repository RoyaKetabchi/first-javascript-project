var x = 25;
var y = 56;
var z = x + y

function printMyName(firstName, lastName){
    document.getElementById("wrapper").innerHTML= firstName + " " + lastName;
    window.alert("the name has changed");
    console.log("new name");
}

console.log(z)