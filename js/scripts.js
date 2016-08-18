function romanConverter(number) {
  var romArray = [1000,500,100,50,10,5,1];
  var romNum = ""
  if(number < 1 || number > 3999) {
    return "Enter a number between 1 and 3999!"
  }
  for (var i = 0; i < romArray.length; i++) {
    if(romArray[i] === 1000) {
      for (var j = 0; j < Math.floor(number/romArray[i]); j++) {
        romNum += "M";
      }
    }
    //i = 500
    else if (romArray[i] === 500) {
      if(Math.floor((number % 1000) / 100) !== 9) {
        for (var j = 0; j < Math.floor((number % 1000) /romArray[i]); j++) {
          romNum += "D";
        }
      }
    }
    //i = 100
    else if (romArray[i] === 100) {
      if(Math.floor((number % 1000) / 100) === 9) {
        romNum +="CM";
      }
      else if(Math.floor((number % 500) / romArray[i]) === 4) {
        romNum += "CD";
      }
      else {
        for (var j = 0; j < Math.floor((number % 500) / romArray[i]); j++) {
          romNum += "C";
        }
      }
    }
    //i = 50
    else if (romArray[i] === 50) {
      if (Math.floor((number % 100) / 10) !== 9) {
        for (var j = 0; j < Math.floor((number % 100) / romArray[i]); j++) {
          romNum += "L";
        }
      }
    }
    //i = 10
    else if (romArray[i] === 10 && number % 10 !== 0) {
      if(Math.floor((number % 100) / 10) === 9) {
        romNum +="XC";
      }
      else if(Math.floor((romArray[i-1]) / romArray[i]) === 4) {
        romNum += "XL";
      }
      else {
        for (var j = 0; j < Math.floor((romArray[i-1]) / romArray[i]); j++) {
          romNum += "X";
        }
      }
    }
    //i = 5
    else if (romArray[i] === 5) {
      if(number % romArray[i-1] !== 9) {
        for (var j = 0; j < Math.floor((number % romArray[i-1]) / romArray[i]); j++) {
          romNum += "V";
        }
      }
    }
    //i = 1
    else {
      if(Math.floor((number % romArray[i-2]) / romArray[i]) === 9) {
        romNum += "IX";
      }
      else if(Math.floor((number % romArray[i-1]) / romArray[i]) === 4) {
        romNum += "IV";
      }
      else {
        for (var j = 0; j < Math.floor((number % romArray[i-1]) / romArray[i]); j++) {
          romNum += "I";
        }
      }
    }
  }
    number % romArray[i];

  return romNum
}
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var startNum = $("#input-number").val();
    var output = romanConverter(startNum);
    $("#output").text(output);
  });
});
