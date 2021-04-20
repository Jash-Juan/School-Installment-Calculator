import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  amount: number;
  terms: number;
  payment: number;
  rate: number;
  interest: number;
  payable: number; 
  message: string; 

  constructor(public navCtrl: NavController) {}

 calculateMonthly() {
      this.rate = 0.75;
      this.interest = (this.amount * this.rate / 100) * this.terms;
      this.payable = +this.amount + +this.interest;
      this.payment = this.payable / this.terms;
      this.interest = parseFloat(this.interest.toFixed(2));
      this.payable = parseFloat(this.payable.toFixed(2));
      this.payment = parseFloat(this.payment.toFixed(2));
  }
}
  
