$(document).ready(function() {
  var input = [];
  $("#ac").on("click", function() {
    input = [];
    document.getElementById("inputDisplay").innerHTML = "0";
  });
  $("#ce").on("click", function() {
    input.pop();
    document.getElementById("inputDisplay").innerHTML = input.join("");
    if (input.length === 0){
      document.getElementById("inputDisplay").innerHTML = "0";
    }
  });
  $("#seven").on("click", function() {
    input.push(7);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#eight").on("click", function() {
    input.push(8);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#nine").on("click", function() {
    input.push(9);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#four").on("click", function() {
    input.push(4);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#five").on("click", function() {
    input.push(5);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#six").on("click", function() {
    input.push(6);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#one").on("click", function() {
    input.push(1);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#two").on("click", function() {
    input.push(2);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#three").on("click", function() {
    input.push(3);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#zero").on("click", function() {
    input.push(0);
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#point").on("click", function() {
    if (input.indexOf(".") < 0) {
      input.push(".");
      document.getElementById("inputDisplay").innerHTML = input.join("");
    }
  });
  $("#add").on("click", function() {
    input.push("+");
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#subtract").on("click", function() {
    input.push("-");
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#multiply").on("click", function() {
    input.push("*");
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  $("#divided").on("click", function() {
    input.push("/");
    document.getElementById("inputDisplay").innerHTML = input.join("");
  });
  //evaluating the array using the evail() built-in function
  $("#equals").on("click",function(){
    var result = eval(input.join(""));
    document.getElementById("inputDisplay").innerHTML = result;
    input = [];
  });
});