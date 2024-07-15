import { Component, OnInit } from '@angular/core';
import { PresidentService } from '../api/president.service';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.scss']
})
export class PresidentComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'President';
  datetime: string = '';
  presidentsData: any[] = [];
  filteredData: any[] = [];

  constructor(private Presidentservice: PresidentService) { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
    this.loadPresidents();
  }

  loadPresidents(): void {
    this.Presidentservice.getPresidents().subscribe(data => {
      console.log('Data received from API:', data);
      this.presidentsData = data;
      this.filteredData = data;
    }, error => {
      console.error('Error fetching Presidents:', error);
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
      this.filteredData = this.presidentsData.filter(president =>
        president.presName.toLowerCase().includes(term) ||
        president.birthYr.toString().includes(term) ||
        president.yrsServ.toString().includes(term) ||
        president.deathAge.toString().includes(term) ||
        president.party.toString().includes(term) ||
        president.stateBorn.toString().includes(term)
      );
    }
  }

  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
}