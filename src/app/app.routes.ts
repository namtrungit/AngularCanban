import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './employee/detail/detail.component';
import { OverviewComponent } from './employee/detail/overview/overview.component';
import { ProjectComponent } from './employee/detail/project/project.component';
import { patch } from 'webdriver-js-extender';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './guard/check-login.guard';
import { CheckSaveFormGuard } from './guard/check-save-form.guard';
import { EditComponent } from './employee/edit/edit.component';
import { AddComponent } from './employee/add/add.component';

const routing: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent, },
    {
        path: 'detail/:id', component: DetailComponent, children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'project', component: ProjectComponent }
        ]
    },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotfoundComponent }
];
export const appRouter = RouterModule.forRoot(routing);
