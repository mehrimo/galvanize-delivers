'use strict';

$(document).ready(function(){

  var burger = $("div#burger>a");
  var pizza = $("div#arugula>a");
  var ribs = $("div#ribs>a");
  var iceCream = $("div#iceCream>a");
  var shoppingCart = $('#shopping_cart>tbody');
  var submitButton = $(':button#submitOrder');
  var subTotal = 0;
  var menuItems = {
    royale : { name : 'Royale with Cheese', price : 8.99 },
    ribs : { name : 'Smoked ribs', price : 14.99 },
    arugula : { name : 'Arugula Pizza', price : 11.99 },
    iceCream : { name : 'Ice Cream Biscuit', price : 7.99 }
  };

  // add items to cart
  burger.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.royale.name + '</td><td class="right-align">' + menuItems.royale.price + '</td></tr>');
      Materialize.toast('Royale with Cheese added.', 3000);
      subTotal += (menuItems.royale.price);
      updatePrices();
    });
   pizza.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.arugula.name + '</td><td class="right-align">' + menuItems.arugula.price + '</td></tr>');
      Materialize.toast('Arugula Pizza added.', 3000);
      subTotal += (menuItems.arugula.price);
      updatePrices();
    });
    ribs.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.ribs.name + '</td><td class="right-align">' + menuItems.ribs.price + '</td></tr>');
      Materialize.toast('Smoke ribs added.', 3000);
      subTotal += (menuItems.ribs.price);
      updatePrices();
    });
    iceCream.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.iceCream.name + '</td><td class="right-align">' + menuItems.iceCream.price + '</td></tr>');
      Materialize.toast('Ice Cream Biscuit added.', 3000);
      subTotal += (menuItems.iceCream.price);
      updatePrices();
      });

  // update subtotal, tax, total
  function updatePrices() {
    var tax = Math.round((subTotal * 0.028) * 100) / 100;
    var total = subTotal + tax;
    $('#subTotal').text('$ ' + subTotal.toFixed(2));
    $('#tax').text('$ ' + tax.toFixed(2));
    $('#total').text('$ ' + total.toFixed(2));
  }

  // validate submit form
  submitButton.click(function(){
    var fullName = $(':input.fullName');
    var phoneNumber = $(':input.phoneNumber');
    var address = $(':input.address');

    if(shoppingCart.children().length < 1){
      Materialize.toast('Your cart is empty. Please choose an item.', 3000);
    } else {
      if(!fullName.val() && !phoneNumber.val() && !address.val()) {
        fullName.addClass('invalid');
        Materialize.toast('Please enter a valid name.', 3000);
        phoneNumber.addClass('invalid');
        Materialize.toast('Please enter a valid number', 3000);
        address.addClass('invalid');
        Materialize.toast('Please enter a valid address.', 3000);
      } else if(fullName.val() && !phoneNumber.val() && !address.val()) {
        phoneNumber.addClass('invalid');
        Materialize.toast('Please enter a valid number.', 3000);
        address.addClass('invalid');
        Materialize.toast('Please enter a valid address.', 3000);
      } else if(fullName.val() && phoneNumber.val() && !address.val()){
        address.addClass('invalid');
        Materialize.toast('Please enter a valid address.', 3000);
      } else {
        fullName.addClass('valid');
        phoneNumber.addClass('valid');
        address.addClass('valid');
        Materialize.toast('Order Successfully submitted', 3000);
      }

    }

  });

});
