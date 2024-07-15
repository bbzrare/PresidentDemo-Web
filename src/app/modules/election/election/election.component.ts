import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../api/election.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'Election';
  datetime: string = '';
  presidentsData: any[] = [];
  filteredData: any[] = [];

  constructor(private ElectionService: ElectionService) { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
    this.loadElections();
  }

  loadElections(): void {
    this.ElectionService.getPresElections().subscribe(data => {
      console.log('Data received from API:', data);
      this.presidentsData = data;
      this.filteredData = data;
    }, error => {
      console.error('Error fetching Elections:', error);
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
        const electionYear = president.electionYear ? String(president.electionYear).toLowerCase() : '';
        const candidate = president.candidate ? String(president.candidate).toLowerCase() : '';
        const votes = president.votes ? String(president.votes).toLowerCase() : '';
        const winnerLoserIndic = president.winnerLoserIndic ? String(president.winnerLoserIndic).toLowerCase() : '';

        return electionYear.includes(term) ||
          candidate.includes(term) ||
          votes.includes(term) ||
          winnerLoserIndic.includes(term);
      });
    }
    console.log('Filtered data:', this.filteredData);
  }

  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
}