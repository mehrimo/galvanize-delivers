'use strict';

$( document ).ready(function() {

var burger = $('div#burger>a');
var ribs = $('#ribs>a');
var pizza = $('#pizza>a');
var iceCream = $('#iceCream>a');
var shoppingCart = $('#shoppingCart>tbody');
var name = $('#name');
var phone = $('#phone');
var address = $('#address');
var order = $('#order');
var total = $('#total');
var subtotal = $('#subtotal');
var tax = $('tax')

var menuItems = {
  { burger: 8.99 }
  { pizza: 11.99 }
  { iceCream: 7.99
    { ribs: 14.99 }

//add shoppingCart id for tbody
// burger.click(function() {
//       shoppingCart.append('<tr><td>' + menuItems.royale.name + '</td><td class="right-align">' + menuItems.royale.price + '</td></tr>');
//       subTotal += (menuItems.royale.price);
//       updatePrices();
//     });

//do subtotal, total, tax function in <tfoot> of <table>, above <tbody>

//form validation Materialize.toast











  });
