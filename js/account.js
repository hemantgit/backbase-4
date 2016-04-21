/**
 * @name Account
 * @description Base account class which provides prototype for both Checking and Retirement accounts
 * @constructor
 *
 * @param { number } id Used for identification purposes
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */

function Account( id ) {

  // All accounts begin with zero balance 
 	this.balance = 0;

 	// Assign passed id to new account
 	this.id = id;

 	// Cache scope
 	var self = this;

 	// Add event listener for withdraw button
 	this.getWithdrawButton().addEventListener( 'click', self.withdraw.bind(self), false );
}


/**
 * @name Withdraw
 * @description Withdraws funds from account, and updates DOM accordingly
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.withdraw = function() {
	
	// Cache amount value from from amount input
	var amount = this.getAmountValue();
  
	// If amount is less than or equal to current balance
  if( amount <= this.balance ) {

  	// Set account's balance by subtracting amount from balance
    this.balance = this.balance - amount;
  }

  // Else set balance to zero
  else {
  	this.balance = 0;
  }

  // Update DOM with new balance
  this.setBalance( this.balance );

  // Update balance background based on current balance
  this.setBalanceBackground();

  // Clear input after intaking user submission
  this.resetAmountValue();
}


/**
 * @name setBalance
 * @description Sets user's account balance and updates DOM
 *
 * @param { number } newBalance Number at which to set user's balance
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.setBalance = function( newBalance ) {
	
	// Cache account's balance container DOM element
	var balanceContainer = this.getBalanceContainer();
	
	// Update DOM with new amount
	balanceContainer.innerHTML = newBalance;
}


Account.prototype.setBalanceBackground = function () {

	// If balance is zero
  if( this.balance === 0 )

  	// Add zero class to balance container element
    addClass( this.getBalanceBackgroundContainer(), 'zero' );

   // If balance greater than zero
	else {

		// Remove zero class to balance container element
		removeClass( this.getBalanceBackgroundContainer(), 'zero' );
	}
}




/**
 * @name getAmountValue
 * @description Grab value from input. Also grabs input element beforehand.
 *
 * @returns { object } value Amount user is depositing or withdrawing
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getAmountValue = function() {

	// Parse integer from amount input element's value
	var amount = parseInt( this.getAmountInputElement().value );

	// If user failed to put anything, somehow put in letters, or put in a negative number
	if ( isNaN( amount ) || typeof amount !== "number" || amount < 0 ) {
		
		// Reset amount to zero
		amount = 0;
	}

	// Return normalized amount
	return amount;
}



/**
 * @name setAmountValue
 * @description Caches account's input element and sets its value to empty string
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.resetAmountValue = function() {

	// Cache account's input element and set its value to empty string
	this.getAmountInputElement().value = "";
}




/* Get DOM element helper functions */


/**
 * @name getAccountElement
 * @description Returns account element so that we can grab something within it from other methods easier
 *
 * @returns { object } accountElement DOM element on which we can operate either the balance container or amount from input
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getAccountElement = function() {

	return document.getElementById( this.id );
}


/**
 * @name getBalanceContainer
 * @description Returns account balance element so we can update with new value
 *
 * @returns { object } balanceContainer DOM element in which the current balance resides
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getBalanceContainer = function() {
	return this.getAccountElement().getElementsByClassName( "balance-amount" )[ 0 ];
}


/**
 * @name getBalanceBackgroundContainer
 * @description Returns balanceBackgroundContainer so we can update it when user's balance toggles between 0 and greater than 0
 *
 * @returns { object } balanceBackgroundContainer DOM element which user clicks to trigger deposit
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getBalanceBackgroundContainer = function() {
	return this.getAccountElement().getElementsByClassName( "balance" )[ 0 ];
}

/**
 * @name getAmountInputElement
 * @description Returns amountInputElement so we can grab its value and trigger transfers
 *
 * @returns { object } amountInputElement DOM element which user clicks to trigger deposit
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getAmountInputElement = function() {
	return this.getAccountElement().getElementsByClassName( "amount-input" )[ 0 ];
}


/**
 * @name getDepositButton
 * @description Returns deposit button so we can add an event listener to it
 *
 * @returns { object } depositButton DOM element which user clicks to trigger deposit
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getDepositButton = function() {
	return this.getAccountElement().getElementsByClassName("deposit")[0];
}


/**
 * @name getWithdrawButton
 * @description Returns withdraw button so we can add an event listener to it
 *
 * @returns { object } withdrawButton DOM element which user clicks to trigger deposit
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Account.prototype.getWithdrawButton = function() {
	return this.getAccountElement().getElementsByClassName("withdraw")[0];
}