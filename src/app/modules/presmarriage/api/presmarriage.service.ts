import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresmarriageService {
  private apiUrl = 'http://localhost:9003/api/Presmarriage';

  constructor(private http: HttpClient) { }

  getPresMarriages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
