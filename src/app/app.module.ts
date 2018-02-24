import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { FormsModule } from '@angular/forms'; // Thư viện chứa ngModel
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, TutorialComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

