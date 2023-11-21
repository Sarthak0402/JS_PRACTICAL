var n;
var Array = [];

function lengthh() {
  n = document.getElementById("1").value;
  var str = "You have entered length:" + n;
  document.getElementById("res1").innerHTML = str;
}

function arrayip() {
  let arrval = document.getElementById("2").value;
  Array = arrval.split(",");

  if (Array.length > n) {
    var str =
      "You have entered more elements as compared to the array size";
    document.getElementById("res2").innerHTML = str;
  } else {
    var str = "You have entered: " + Array;
    document.getElementById("res2").innerHTML = str;
  }
}

function delByIndex() {
  let index = parseInt(document.getElementById("delete").value);
  if (isNaN(index) || index < 0 || index >= Array.length) {
    document.getElementById("res3").innerHTML = "Invalid index";
    return;
  }

  Array.splice(index, 1);
  var str = "Element at index " + index + " deleted.";
  document.getElementById("res3").innerHTML = str;
}

function del() {
  let val = document.getElementById("delete").value;
  let index = Array.indexOf(val);

  if (index === -1) {
    var str = "Value " + val + " is not present in the array.";
    document.getElementById("res3").innerHTML = str;
  } else {
    Array.splice(index, 1);
    var str = "Value " + val + " deleted from the array.";
    document.getElementById("res3").innerHTML = str;
  }
}

function find() {
  var val = document.getElementById("fnd").value;
  var found = Array.includes(val);
  var str =
    "Value " +
    val +
    (found ? " is" : " is not") +
    " present in the array.";
  document.getElementById("res4").innerHTML = str;
}

function findIndex() {
  var val = document.getElementById("fnd").value;
  var index = Array.indexOf(val);

  if (index === -1) {
    var str = "Value " + val + " is not present in the array.";
    document.getElementById("res4").innerHTML = str;
  } else {
    var str = "Value " + val + " is present at index " + index + ".";
    document.getElementById("res4").innerHTML = str;
  }
}

function replaceByIndex() {
  let index = parseInt(document.getElementById("replace-index").value);
  let newValue = document.getElementById("replace-value").value;

  if (isNaN(index) || index < 0 || index >= Array.length) {
    document.getElementById("res5").innerHTML = "Invalid index.";
    return;
  }

  Array[index] = newValue;
  var str =
    "Element at index " + index + " replaced with " + newValue + ".";
  document.getElementById("res5").innerHTML = str;
}

function replaceByValue() {
  let valueToReplace = document.getElementById("replace-value").value;
  let newValue = document.getElementById("replace-new-value").value;

  let index = Array.indexOf(valueToReplace);

  if (index === -1) {
    document.getElementById("res5").innerHTML =
      "Value " + valueToReplace + " not found in the array.";
    return;
  }

  Array[index] = newValue;
  var str =
    "Value " + valueToReplace + " replaced with " + newValue + ".";
  document.getElementById("res5").innerHTML = str;
}

function Empty() {
  Array = [];
  document.getElementById("res6").innerHTML = "Array is Emptied";
}

function Display() {
  var str = "Array: " + Array.join(", ");
  document.getElementById("res6").innerHTML = str;
}