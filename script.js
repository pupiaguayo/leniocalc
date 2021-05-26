let display = document.getElementById("screen-result");
let containerImage = document.getElementById("image");
let image = document.createElement("img");
function getNumber(number) {
  let value = number.value;
  display.value += value;
  display.innerHTML;
  console.log(display.value);
}
image.src = "./img/my-leni (1).png";
function calcular() {
  try {
    display.value = eval(display.value);
    image.src = "./img/my-leni (2).png";
  } catch (error) {
    display.value = "Error";
    image.src = "./img/my-leni (3).png";
  }
}

function cleanDisplay() {
  display.value = "";
}
containerImage.appendChild(image);
