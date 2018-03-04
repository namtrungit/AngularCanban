import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { FormsModule } from '@angular/forms'; // Thư viện chứa ngModel
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { appRouter } from './app.routes';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './employee/detail/detail.component';
import { OverviewComponent } from './employee/detail/overview/overview.component';
import { ProjectComponent } from './employee/detail/project/project.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import {CheckLoginGuard} from './guard/check-login.guard';
import {CheckSaveFormGuard} from './guard/check-save-form.guard';
@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    EmployeeComponent,
    HomeComponent,
    NotfoundComponent,
    DetailComponent,
    OverviewComponent,
    ProjectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, appRouter
  ],
  providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

