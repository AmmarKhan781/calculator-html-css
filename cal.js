const display = document.getElementById("display");

function appendtodisplay(val) {
  display.textContent += val;
}
function cal() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    console.error("error");
  }
}
function cl() {
  display.textContent = "";
}

