import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
  private apiUrl = 'http://5a914d75d515b50012005422.mockapi.io/api/employees';
  constructor(
    private _http: Http
  ) {

  }
  getList(): Observable<any[]> {
    return this._http.get(this.apiUrl).map((response: Response) => response.json());
  }
}
