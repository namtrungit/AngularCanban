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
  getEm(id: number): Observable<any> {
    return this._http.get(this.apiUrl + '/' + id).map((response: Response) => response.json());
  }
  editEm(id: number, data: any): Observable<any> {
    return this._http.put(this.apiUrl + '/' + id, data).map((response: Response) => response.json());
  }
  addEm(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data).map((response: Response) => response.json());
  }
  delEm(id: any) {
    return this._http.delete(this.apiUrl + '/' + id).map((response: Response) => response.json());
  }
}
