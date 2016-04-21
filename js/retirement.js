/**
 * @name Retirement
 * @description Retirement account class which adds an employer bonus
 * @constructor
 *
 * @param { number } id Used for identification purposes
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */

function Retirement( id ) {
	
	// Equivalent to super( args )
	Account.call( this, id );

	// Change this one property and the employer bonus updates accordingly. Whoo!
	this.employerBonus = 10;

	// Cache scope
	var self = this;

	// Add event listener for deposit button
 	this.getDepositButton().addEventListener( 'click', self.deposit.bind(self), false );
}

// Specify Account as base class and constructor as our constructor above
Retirement.prototype = Object.create( Account.prototype );
Retirement.prototype.constructor = Retirement;


/**
 * @name Deposit
 * @description Deposits funds from account, and updates DOM accordingly. This one has an employer bonus. Placed on Retirement class as Account class knows nothing about Retirement class 
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Retirement.prototype.deposit = function() {

  // Cache amount value from from amount input
	var amount = this.getAmountValue();

	// If balance is 
	if (amount !== 0) {

		// Update balance
	  this.balance = this.balance + this.addEmployerBonus( amount );

	  // Update DOM with new balance
  	this.setBalance( this.balance );
	}

	// Set balance background after balance change
	this.setBalanceBackground();

	// Clear input after intaking user submission
  this.resetAmountValue();
}

/**
 * @name addEmployerBonus
 * @description Adds employer bonus to amount, then returns new amount
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */
Retirement.prototype.addEmployerBonus = function( amount ) {
	return amount + this.employerBonus;
}