import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreDataService } from '../Services/store-data.service';

interface firstFormDataInterface {
  title : string;
  errors : string[];
  placeholder : string;
};



@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent {
  firstStepForm: FormGroup;
  firstFormData : firstFormDataInterface[] = [
    { title : 'name', errors : ['required'], placeholder : 'e.g. Stephen King'},
    { title : 'email', errors : ['required', 'email'], placeholder : 'e.g. stephenking@lorem.com' },
    { title : 'phone', errors : ['required'], placeholder : 'e.g. +1 234 567 890' },
  ];
  constructor(private router : Router, private dataService : StoreDataService) { }

  ngOnInit() {
    const { name, email, phone } = this.dataService.loadFirstStepData();
    this.firstStepForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
      phone: new FormControl(phone, Validators.required),
    });
  }
  
  onSubmit() {
    console.log(this.firstStepForm.value);
    this.dataService.storeFirstStepData(this.firstStepForm.value);
    this.router.navigate(['/home/second']);
  }
}
