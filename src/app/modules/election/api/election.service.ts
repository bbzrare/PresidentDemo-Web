import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  private apiUrl = 'http://localhost:9003/api/Election';

  constructor(private http: HttpClient) { }

  getPresElections(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
