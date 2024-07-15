import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreshobbyService {
  private apiUrl = 'http://localhost:9003/api/PresHobby';

  constructor(private http: HttpClient) { }

  getPresHobbys(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
