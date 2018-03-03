import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './employee/detail/detail.component';
import { OverviewComponent } from './employee/detail/overview/overview.component';
import { ProjectComponent } from './employee/detail/project/project.component';
import { patch } from 'webdriver-js-extender';

const routing: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    {
        path: 'detail/:id', component: DetailComponent, children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'project', component: ProjectComponent }
        ]
    },
    { path: '**', component: NotfoundComponent }
];
export const appRouter = RouterModule.forRoot(routing);
