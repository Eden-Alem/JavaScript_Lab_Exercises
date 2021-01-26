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

    
})();
    