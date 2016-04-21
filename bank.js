




/**
 * @name Account
 * @description Base account class which provides prototype for both Checking and Retirement accounts
 * @constructor
 *
 * @param { string } type Specifies type of account (Checking or Retirement)
 * @param { string } balanceContainer DOM element to update with new balance        
 * 
 * @author Sam Reaves
 * @date April 20th, 2016
 */

function Account( type, balanceContainer ) {

  /*
    Base properties

    Balance: $0
    
  */

}


function Checking( type, balanceContainer, addButton, withdrawButton ) {

}

function Retirement( type, balanceContainer, addButton, withdrawButton ) {

}


var balance1 = 0;
var balance2 = 0;

$(function(){

  $('#deposit1').click(depositAccount1);
  $('#deposit2').click(depositAccount2);
  $('#withdraw1').click(withdrawAccount1);
  $('#withdraw2').click(withdrawAccount2);
  updateDisplay();
});

function depositAccount1()
{
  var amount = $('#amount1').val();
  amount = parseInt(amount);
  balance1 = amount + balance1;
  updateDisplay();
}

function depositAccount2()
{
  var amount = $('#amount2').val();
  amount = parseInt(amount);
  amount = amount + 10;
  balance2 = amount + balance2;
  updateDisplay();
}

function withdrawAccount1()
{
  var amount = $('#amount1').val();
  amount = parseInt(amount);
  if(amount <= balance1) {
    balance1 = balance1 - amount;
  }
  updateDisplay();
}

function withdrawAccount2()
{
  var amount = $('#amount2').val();
  amount = parseInt(amount);
  if(amount <= balance2) {
    balance2 = balance2 - amount;
  }
  updateDisplay();
}

function updateDisplay()
{
  if(balance1 <= 0)
    $('#balance1').addClass('zero');
  else
    $('#balance1').removeClass('zero');

  if(balance2 <= 0)
    $('#balance2').addClass('zero');
  else
    $('#balance2').removeClass('zero');

  $('#balance1').text('$' + balance1);
  $('#balance2').text('$' + balance2);
  $('#amount1').val('');
  $('#amount2').val('');
}

