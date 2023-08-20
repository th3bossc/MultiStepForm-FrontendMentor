import { Component, WritableSignal, signal, effect } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreDataService } from '../Services/store-data.service';

interface secondFormDataInterface {
  value : string;
  image : string;
  title : string;
  price : number[];
};


@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent {
  secondStepForm : FormGroup;
  secondFormData : secondFormDataInterface[] = [
    { value : 'arcade', image : './assets/images/icon-arcade.svg', title : 'Arcade', price : [9, 90] },
    { value : 'advanced', image : './assets/images/icon-advanced.svg', title : 'Advanced', price : [12, 120] },
    { value : 'pro', image : './assets/images/icon-pro.svg', title : 'Pro', price : [15, 150] },
  ];
  constructor(private router : Router, private dataService : StoreDataService) { }

  ngOnInit() { 
    const { option, plan } = this.dataService.loadSecondStepData(); 
    this.secondStepForm = new FormGroup({
      option : new FormControl(option, [Validators.required]),
      plan : new FormControl(plan, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.secondStepForm.value);
    this.dataService.storeSecondStepData(this.secondStepForm.value);
    this.router.navigate(['/home/third']);
  }
}
