import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor() { }

  // Add your service methods here
  getAdministrationData() {
    // This is an example function, replace with your logic
    return [
      { id: 1, name: 'Admin 1' },
      { id: 2, name: 'Admin 2' }
    ];
  }
}
