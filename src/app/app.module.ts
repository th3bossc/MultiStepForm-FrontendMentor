import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import { StoreDataService } from './Services/store-data.service';
import { FinalStepComponent } from './final-step/final-step.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent,
    FinalStepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
