import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresidentService {
  private apiUrl = 'http://localhost:9003/api/President';

  constructor(private http: HttpClient) { }

  getPresidents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

