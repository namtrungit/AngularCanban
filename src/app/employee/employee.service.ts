import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  public getList(): any[] {
    const employees: any[] = [
      { Id: 1, emName: 'Trung' },
      { Id: 2, emName: 'Nam' },
      { Id: 3, emName: 'Bùi' }
      // tslint:disable-next-line:no-trailing-whitespace
    ];
    return employees;
  }
  constructor() { }

}
