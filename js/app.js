$(document).ready(function(){

  var animal = prompt("Would you like to learn about turtles, snakes, or insects?");

  if (animal === "turtles") {
    $('#turtles').show();
} if (animal === "insects") {
  $('#insects').show();
} if (animal === "snakes") {
  $('#snakes').show();
}

});
