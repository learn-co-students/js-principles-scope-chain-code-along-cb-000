/* Your code goes here */
var customerName = 'bob';
const leastFavoriteCustomer = 'some guy';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'me'
}

function attemptTwoFavoriteCustomers() {
  throw new SyntaxError('Cannot redeclare variables');
}
