/* Your code goes here */
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Dick';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not Dick';
}



function attemptTwoFavoriteCustomers() {
  let favoriteCustomer;
  //let favoriteCustomer;
  throw new SyntaxError('Flatiron Fix your tests, before wasting our time!', 'someFile.js', 10);

}
