function append(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value =
      eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function backspace() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = val.slice(0, -1);
}
