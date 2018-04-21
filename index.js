var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sour fred'
}


function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function congratulateCustomer(){
  return `congrats ${favoriteCustomer}`
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    let favoriteCustomer = 'not bar'
}

/*
// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob'

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

// Now declare a constant in global scope called leastFavoriteCustomer customer. Ok, now write a function called changeLeastFavoriteCustomer that attempts to change that constant - notice what Javascript does when you try to change the constant.
const leastFavoriteCustomer = 'sour fred';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sour fred';
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer(){
  bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope, by writing a new function called overWriteBestCustomer that changes that bestCustomer variable.
function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite;
}

// congratulateCustomer()
function congratulateCustomer(){
  return `congrats ${favoriteCustomer}`;
}

// Now declare a constant in global scope called leastFavoriteCustomer customer. Ok, now write a function called changeLeastFavoriteCustomer that attempts to change that constant - notice what Javascript does when you try to change the constant.
const leastFavoriteCustomer = 'that guy';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'that other guy';
}

// Now write another function that will break down. Try declaring a variable called favoriteCustomer and redeclaring that same variable such that an error is thrown. This helps illustrate how let only allows a given variable to be declared one time, but that variable can be re-assigned to a different value. However, const does not allow re-assignment, nor does it allow the same constant to be declared more than once.
function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar';
    let favoriteCustomer = 'not bar';
}

*/
