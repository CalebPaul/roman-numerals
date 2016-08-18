function romanConverter(number) {
  var romArray = [];
  if(number < 1 || number > 3999) {
    return "Enter a number between 1 and 3999!"
  }
  for (var i = 0; i < number; i++) {
    romArray.push("I");
    alert(romArray);
  }
  return romArray;
}
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var startNum = $("#input-number").val();
    var output = romanConverter(startNum);
    $("#output").text(output);
  });
});
