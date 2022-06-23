
$(document).ready(function() {
  let cartTotal = 0
  $(".button").click(function(e) {
    let price = $(".cart-price")
    let cost = parseFloat(e.target.value)
    cartTotal = parseFloat(cartTotal + cost)
    console.log(cartTotal)
    price.html("$" + cartTotal)
  })
});


$(function(){
  $('.card').hover(
    function() {
    $(this).css('background-color', 'gray');
    $(this).css('color','white');
    $(this).fadeTo('slow', 0.9)
  }, function() {
    $(this).css('background-color', 'white');
    $(this).css('color','black');
    $(this).fadeTo('fast', 1.2)
  }
)
});
