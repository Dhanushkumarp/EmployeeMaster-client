import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'https://localhost:7068/api/Employees';
  httpClient: any;

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  get(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  findByTitle(title: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?title=${title}`);
  }
}
