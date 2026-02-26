// creating a customer
interface Customer {
    name: string;
    customerID: number;
    email: string
};

// creating the total loan payment
interface totalLoanpayment {
principalAmount: number;
rate: number;
years: number
};


// entering details of a customer
let customer1: Customer = {
    name: 'khumbelo',
    customerID: 567,
    email: 'khumbe@loan.com'
};

// entering loan payment detains
let totalLoanpayment1: totalLoanpayment = {
    principalAmount: 5000,
    rate: 15,
    years: 2

};

// function to calculate loan repayment
function calculateLoan(customer: Customer, loan: totalLoanpayment): void {

    // Simple Interest Formula
    const interest = (loan.principalAmount * loan.rate * loan.years) / 100;

    const totalPayment = loan.principalAmount + interest;

    console.log("Customer Name:", customer.name);
    console.log("Interest:", interest);
    console.log("Total Payment:", totalPayment);
}

console.log(calculateLoan(customer1, totalLoanpayment1));