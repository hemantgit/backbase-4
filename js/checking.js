/**
 * @name Checking
 * @description Checking account class which does not add an employer bonus
 * @constructor
 *
 * @param { number } id Used for identification purposes
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */

function Checking( id ) {
	
	// Equivalent to super( args )
	Account.call( this, id );

	// Cache scope
	var self = this;

	// Add event listener for deposit button
 	this.getDepositButton().addEventListener( 'click', self.deposit.bind(self), false );
}

// Specify Account as base class and constructor as our constructor above
Checking.prototype = Object.create( Account.prototype );
Checking.prototype.constructor = Checking;



/**
 * @name Deposit
 * @description Deposits funds from account, and updates DOM accordingly. This one has no employer bonus. Placed on Checking class as Account class knows nothing about Checking class 
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Checking.prototype.deposit = function() {

	// Cache amount value from from amount input
	var amount = this.getAmountValue();

	// If balance is 
	if ( amount !== 0 ) {

		// Update balance
	  this.balance = this.balance + amount;

	  // Update DOM with new balance
  	this.setBalance( this.balance );
	}

	// Set balance background after balance change
	this.setBalanceBackground();

	// Clear input after intaking user submission
  this.resetAmountValue();

}