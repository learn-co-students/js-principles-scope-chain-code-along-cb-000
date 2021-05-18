/* Your code goes here */

customerName = 'bob';
const leastFavoriteCustomer = 'tom'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'tim';
}

function attemptTwoFavoriteCustomers () {
 let favoriteCustomer = 'blake';

  throw new SyntaxError('err', 'blah.js', 1);


}