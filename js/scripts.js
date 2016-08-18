function romanConverter(number) {
  var romArray = [1000,500,100,50,10,5];
  var romNum = ""
  if(number < 1 || number > 3999) {
    return "Enter a number between 1 and 3999!"
  }
  for (var i = 0; i < romArray.length; i++) {
    if(romArray[i] === 1000) {
      for (var j = 0; j < Math.floor(number/romArray[i]); j++) {
        romNum += "M";
      }
    } else if (romArray[i] === 500) {
      for (var j = 0; j < Math.floor((number % 1000) /romArray[i]); j++) {
        romNum += "D";
      }
    } else if (romArray[i] === 100) {
      for (var j = 0; j < Math.floor((number % 500) / romArray[i]); j++) {
        romNum += "C";
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
