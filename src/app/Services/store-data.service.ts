import { Injectable } from '@angular/core';

export interface dataInterface {
  fistStep ?: {
    name : string;
    email : string;
    phone : string;
  };
  secondStep ?: {
    option : string;
    plan : boolean;
  };
  thirdStep ?: {
    addOns : {
      online : boolean;
      storage : boolean;
      customize : boolean;
    }
  }
}

interface priceDataInterface {
  secondStep : {
    arcade : number;
    advanced : number;
    pro : number;
  }[];
  thirdStep : {
    online : number;
    storage : number;
    customize : number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  priceData : priceDataInterface = {
    secondStep : [
      {
        arcade : 9,
        advanced : 12,
        pro : 15,
      },
      {
        arcade : 90,
        advanced : 120,
        pro : 150,
      }
    ],
    thirdStep :[ 
      {
        online : 1,
        storage : 2,
        customize : 2,
      },
      {
        online : 10,
        storage : 20,
        customize : 20,
      }
    ],
  };

  storeFirstStepData(data : dataInterface['fistStep']) {
    localStorage.setItem('firstStep', JSON.stringify(data));
  }

  storeSecondStepData(data : dataInterface['secondStep']) {
    localStorage.setItem('secondStep', JSON.stringify(data));
  }

  storeThirdStepData(data : dataInterface['thirdStep']) {   
    localStorage.setItem('thirdStep', JSON.stringify(data));
  }

  loadFirstStepData() : dataInterface['fistStep'] {
    return JSON.parse(localStorage.getItem('firstStep')) || {name : null, email : null, phone : null};
  }

  loadSecondStepData() : dataInterface['secondStep'] {
    return JSON.parse(localStorage.getItem('secondStep')) || {option : null, plan : null};
  }

  loadThirdStepData() : dataInterface['thirdStep'] {
    return JSON.parse(localStorage.getItem('thirdStep')) || {addOns : {online : false, storage : false, customize : false}};
  }
}
