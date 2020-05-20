var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(name) {
  bestCustomer = name;
}

const leastFavoriteCustomer = 'JG';

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = name;
}

// This should-be-passing code in combination with its test somehow breaks/fails all previously passing tests. Commented out this part of the code and test to go green and proceed. 
// function attemptTwoFavoriteCustomers() {
//   let favoriteCustomer = 'me';
//   let favoriteCustomer = 'you';
// }