import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = 'http://localhost:9003/api/State';

  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
