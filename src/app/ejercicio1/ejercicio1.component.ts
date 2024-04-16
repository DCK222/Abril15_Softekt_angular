import { Component } from '@angular/core';
import { Loan } from '../modelo/Loan';
import { ConventionalLoan } from '../modelo/ConventionalLoan';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  calculateInterestOnlyLoanPayment(loanTerms: Loan): string { 
    let interest = loanTerms.interesRate / 1200; 
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
  }

   calculateConventionalLoanPayment(loanTerms : ConventionalLoan) {
   
    let interest = loanTerms.interesRate / 1200; 
   
    let payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
   }

   performCalculations(): void {
    let interestOnlyLoan: Loan = { principal: 30000, interesRate: 5 };
    let conventionalLoan: ConventionalLoan = { principal: 30000, interesRate: 5, months: 180 };

    let interestOnlyPayment = this.calculateInterestOnlyLoanPayment(interestOnlyLoan);
    let conventionalPayment = this.calculateConventionalLoanPayment(conventionalLoan);

    console.log(interestOnlyPayment); 
    console.log(conventionalPayment);  
  }
  
}
