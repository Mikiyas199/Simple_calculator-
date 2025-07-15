let display = document.getElementById("display");

function append(value) {
  if (display.value === "Error") display.value = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Allow keyboard typing
document.addEventListener("keydown", (e) => {
  if (e.key.match(/[0-9+\-*/.]/)) {
    append(e.key);
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Enter" || e.key === "=") {
    calculate();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
