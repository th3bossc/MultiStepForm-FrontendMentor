import { Component } from '@angular/core';
import { StoreDataService } from '../Services/store-data.service';

interface summaryInterface {
  summarySecond : {
    option : string;
    plan : boolean;
    price : number;
  };
  summaryThird : { 
    name : string;
    price : number;
  }[];
}


@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.scss']
})
export class FourthStepComponent {
  summaryData : summaryInterface;
  total : number;
  constructor(private dataService : StoreDataService) { }

  ngOnInit() {
    const {option, plan} = this.dataService.loadSecondStepData();
    const {online, storage, customize} = this.dataService.loadThirdStepData().addOns;

    this.summaryData = {
      summarySecond : {
        option,
        plan,
        price : this.dataService.priceData.secondStep[plan ? 1 : 0][option],
      },
      summaryThird : [],
  };

    if (online) {
      this.summaryData.summaryThird.push({
        name : 'Online service',
        price : this.dataService.priceData.thirdStep[plan ? 1 : 0].online,
      });
    }

    if (storage) {
      this.summaryData.summaryThird.push({
        name : 'Larger storage',
        price : this.dataService.priceData.thirdStep[plan ? 1 : 0].storage,
      });
    }

    if (customize) {
      this.summaryData.summaryThird.push({
        name : 'Customizable profile',
        price : this.dataService.priceData.thirdStep[plan ? 1 : 0].customize,
      });
    }

    this.total = this.summaryData.summarySecond.price + this.summaryData.summaryThird.reduce((acc, cur) => acc + cur.price, 0);

  }
}
