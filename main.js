origArray = [2,3,4];

document.getElementById("textbox1").value = origArray[0];
document.getElementById("textbox2").value = origArray[1];
document.getElementById("textbox3").value = origArray[2];


function first() {

    square = origArray.map(x => x ** 2);
    document.getElementById("textbox1").value = square[0];
    document.getElementById("textbox2").value = square[1];
    document.getElementById("textbox3").value = square[2];

}

document.addEventListener("DOMContentLoaded", function (event) {
    
    document.getElementById("button2").addEventListener("click", function () {
        
        cube = origArray.map(x => x ** 3);
        document.getElementById("textbox1").value = cube[0];
        document.getElementById("textbox2").value = cube[1];
        document.getElementById("textbox3").value = cube[2];

    });

    document.getElementById("button3").addEventListener("click", function third () {

        fourth = origArray.map(x => x ** 4);
        document.getElementById("textbox1").value = fourth[0];
        document.getElementById("textbox2").value = fourth[1];
        document.getElementById("textbox3").value = fourth[2];

    });
});



