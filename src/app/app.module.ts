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

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    EmployeeComponent,
    HomeComponent,
    NotfoundComponent,
    DetailComponent,
    OverviewComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, appRouter
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

