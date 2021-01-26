// Create an immediately invokable function that operates on withdrawal, deposit and transfer from bank accounts
(function() {
    let bankAccount = {
        amount: 1500000,
        withdrawalamount: "",
        depositamount: "",
        // Work on the functionality of withdrawing money and note to withdraw the current amount should be greater or equal to 500 and after withdrawal the left money in the bank should at least be 100
        withdrawal: function(withdrawalAmount) {
            let currentAmount = (this.amount >= 500 && withdrawalAmount <= (this.amount - 100)) ? this.amount - withdrawalAmount: this.amount;
            return `The current amount in your bank account is ${Number(currentAmount)}`;
        },
        // Work on the functionality of depositing money by just adding a certain amount from user to the current amount
        deposit: function(depositAmount) {
            let amountCurrent = Number(depositAmount) + this.amount;
            return `The current amount is ${amountCurrent}`;
        }  
    }

    // Work on the functionality of transfering money from one user to another with user input and specified amount from user if the one that transfers has an amount greater or equal to 500 
    // if the amount to transfer is not greater than the user's current amount and if after transfer the user that transfers has at least a 100 birr left in the account.
    function transfer(from, to, transferAmount) {
        if (from >= 500 && from.amount > transferAmount && (from.amount - transferAmount) >= 100) {
            from -= transferAmount;
            to += transferAmount;
            return `The current amount in your bank account is ${from} and the total current amount of the bank account you transferred to is ${to}, thank you for using the service.`;
        }
        else {
            console.log(`To transfer money from your account to another please make sure you have the right requirements as specified below:
            - Make sure you have an amount of greater than 500 birr in your account currently
            - Check if the amount you have inputed to transfer is lesser than the amount you have in your account currently
            - Check if the amount you will be left with after transaction is conducted is at least greater or equal to a 100 birr
            Please use the service again after checking these thank you!`)
        }
    }

    // prompt the user to choose from the services the user would like to use
    let serve = prompt(`Please enter the service you would like to use? (withdraw, deposit, transfer)`);
    if (serve.toLowerCase() === 'withdraw'){
        bankAccount.withdrawalamount =  prompt(`Please enter the amount you would like to withdraw from your bank account with a current amount of ${bankAccount.amount}`);
        console.log(bankAccount.withdrawal(bankAccount.withdrawalamount));
    }
    else if (serve.toLowerCase() === 'deposit') {
        bankAccount.depositamount = prompt(`Please enter the amount you would like to deposit to your bank account?`);
        console.log(bankAccount.deposit(bankAccount.depositamount));
    }
    else if (serve.toLowerCase() === 'transfer') {
        let from = prompt(`Please enter the current amount in your bank account?`);
        let to = prompt(`Please enter the current amount in the bank account you would like to transfer to?`);
        let transferAmount = prompt(`Please enter the amount you would like to transfer?`);
        console.log(transfer(from, to, transferAmount));
    }
    else {
        console.log( `Please choose from the provided services and check your spelling; thank you!`);
    }
})();
    