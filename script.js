function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num === "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num === "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return num.replace(/,/g, '');
}


var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    var output = getOutput();
    var history = getHistory();

    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id === "backspace") {
      output = reverseNumberFormat(output).toString();
      output = output.substr(0, output.length - 1);
      printOutput(output);
    } else if (this.id === "=") {
      if (output !== "") {
        history += output;
      }

      try {
        var result = eval(history);
        printOutput(result);
        printHistory("");
      } catch (error) {
        printOutput("Error");
      }
    } else {
      if (output !== "") {
        history += output;
      }
      history += this.innerText;
      printHistory(history);
      printOutput("");
    }
  });
}
var empty = document.getElementsByClassName("empty");
for (var i = 0; i < empty.length; i++) {
  empty[i].addEventListener('click', function () {
    var output = getOutput();
    var history = getHistory();

    if (this.innerText === "(") {
      history += "(";
      printHistory(history);
      printOutput("");
    } else if (this.innerText === ")") {
      history += output + ")";
      printHistory(history);
      printOutput("");
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    var output = reverseNumberFormat(getOutput());
    if (output !== NaN) {
      output += this.innerText; 
      printOutput(output);
    }
  });
}