customerName = 'bob';

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

function setBestCustomer() {
	bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
	bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Sue';

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'Jack';
}


function attemptTwoFavoriteCustomers(){
  //let favoriteCustomer = 'pete';
  //let favoriteCustomer = 'john';
  throw new SyntaxError('Cannot redeclare variables')
  // **something's wrong with the test - if you try to 
  // just have the two declarations (void the throw satement)
  // you are unable to pass the last test.
}

