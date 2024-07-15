import { Component, OnInit } from '@angular/core';
import { PreshobbyService } from '../api/preshobby.service';

@Component({
  selector: 'app-preshobby',
  templateUrl: './preshobby.component.html',
  styleUrls: ['./preshobby.component.scss']
})
export class PreshobbyComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'PresHobby';
  datetime: string = '';
  presidentsData: any[] = [];
  filteredData: any[] = [];

  constructor(private PreshobbyService: PreshobbyService) { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
    this.loadPresHobbys();
  }

  loadPresHobbys(): void {
    this.PreshobbyService.getPresHobbys().subscribe(data => {
      console.log('Data received from API:', data);
      this.presidentsData = data;
      this.filteredData = data;
    }, error => {
      console.error('Error fetching PresHobbys:', error);
    });
  }

  updateDateTime(): void {
    const now = new Date();
    this.datetime = now.toLocaleString();
  }

  onSearch(): void {
    console.log('Search term:', this.searchTerm);
    if (this.searchTerm.trim() === '') {
      this.filteredData = [...this.presidentsData];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredData = this.presidentsData.filter(president => {
        const presName = president.presName ? String(president.presName).toLowerCase() : '';
        const hobby = president.hobby ? String(president.hobby).toLowerCase() : '';

        return presName.includes(term) ||
          hobby.includes(term);
      });
    }
    console.log('Filtered data:', this.filteredData);
  }


  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
}