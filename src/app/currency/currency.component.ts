import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  multiple: number = 0;
  result: number = 0;
  default = 'NIS'

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  onGetMultiple() {
    this.backend.getMultiple(this.form.value.from, this.form.value.to)
      .subscribe(
      (currency) => {
        console.log(currency)
        this.multiple = currency.conversionMultiple;
      });
  }

  onCalculate() {
    this.backend.getResult(this.form.value.from, this.form.value.to, this.form.value.amount)
      .subscribe(
        (currency) => {
          console.log(currency)
          this.result = currency.totalCalculatedAmount;
        });  }

  onClear() {
    this.form.reset();
    this.multiple = 0;
    this.result = 0;
  }
}
