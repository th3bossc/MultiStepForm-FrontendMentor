import { Component } from '@angular/core';
import { StoreDataService } from '../Services/store-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface thirdFormDataInterface {
  name : string;
  title : string;
  info : string;
  price : number[];
};

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent {
  thirdStepForm : FormGroup;
  currentPlan : boolean;
  thirdFormData : thirdFormDataInterface[] = [
    { name : 'online', title : 'Online', info : 'Access to multiplayer games', price : [1, 10] },
    { name : 'storage', title : 'Storage', info : 'Extra 1TB of cloud save', price : [2, 20] },
    { name : 'customize', title : 'Customize', info : 'Custom theme on your profile', price : [2, 20] },
  ];
  constructor(private dataService : StoreDataService, private router : Router) {}

  ngOnInit() {
    const { online, storage, customize } = this.dataService.loadThirdStepData().addOns;
    this.currentPlan = this.dataService.loadSecondStepData().plan;
    this.thirdStepForm = new FormGroup({
      online : new FormControl(online, Validators.required),
      storage : new FormControl(storage, Validators.required),
      customize : new FormControl(customize, Validators.required),
    });
  }

  onSubmit() {
    this.dataService.storeThirdStepData({addOns : this.thirdStepForm.value});
    this.router.navigate(['/home/fourth']);
  }
}
