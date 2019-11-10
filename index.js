var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  return bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bill';
}

let favoriteCustomer = 'jim';

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'jim bob';
  
  throw new SyntaxError('test broken', 'someFile.js', 10);
  
}



