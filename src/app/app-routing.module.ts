import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import { FinalStepComponent } from './final-step/final-step.component';

const routes: Routes = [
  {path : '', redirectTo: 'home/first', pathMatch: 'full'},
  {path : 'home', component : ContainerComponent, children : [
    {path : 'first', component : FirstStepComponent},
    {path : 'second', component : SecondStepComponent},
    {path : 'third', component : ThirdStepComponent},
    {path : 'fourth', component : FourthStepComponent},
    {path : 'final', component : FinalStepComponent}
  ]},
  {path : '**', redirectTo: 'home/first', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
