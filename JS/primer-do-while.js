let text = "";
let i = 0;
do {
    text += "El número és " + i + "<br>";
    console.log(text);
    i++;
} while (i < 5);

document.getElementById("output").innerHTML = text;

