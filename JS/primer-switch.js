let semafor = "verd", text ='';

switch (semafor) {
  case "verd":
    text = "Pots passar";
    break;
  case "taronja":
    text = "Precaució";
    break;
  case "vermell":
    text = "T'atures!";
    break;
  default:
    text = "No és un semàfor";
}
console.log(text); 