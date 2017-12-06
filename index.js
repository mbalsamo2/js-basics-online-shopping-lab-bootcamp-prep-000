var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);

  cart.push({ [item]: itemPrice});

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  var statement = "In your cart, you have ";
  var numberItemsInCart = cart.length;
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    
  } else if (cart.length === 1) {
    var itemInCart = Object.keys(cart[0]);
    
    console.log(`${statement}${itemInCart} at $${cart[0][itemInCart]}.`); 
    
  } else if (cart.length === 2) {
    var itemOne = Object.keys(cart[0]);
    var itemOnePrice = Object.keys(cart[0][itemOne]);
    var itemTwo = Object.keys(cart[1]);
    var itemTwoPrice = Object.keys(cart[1][itemTwo]);
    
    console.log(`${statement}${itemOne} at $${itemOnePrice} and ${itemTwo} at $${itemTwoPrice}.`);
  } else {
    cartItems = [];
    
    for (var i in cart ) {
      var item = Object.keys(cart[i]);
      var phrase = `${item} at $${cart[i][item]}`;
      
      cartItems.push(phrase);
    }
   
   var lastComma = cartItems.pop();
   console.log(`${statement}${cartItems.join(', ')}, and ${lastComma}.` );
    
  }
}

function total() {
  var total = 0;
  var item;
  var itemPrice;
  
  for (var i in cart) {
    item = Object.keys(cart[i]);
    itemPrice = cart[i][item];
    total += itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var found = false;
   if (cart.hasOwnProperty(item) === true ) {
     delete cart[item];
     
   } else {
     
     console.log("That item is not in your cart");
     
   }
   
   return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
