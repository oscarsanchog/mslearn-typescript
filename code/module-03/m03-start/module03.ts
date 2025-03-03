/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
  principal: number
  interestRate: number
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
  months: number
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

console.log(calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5}));


/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(conventionalLoan: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest = conventionalLoan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = conventionalLoan.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoan.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
