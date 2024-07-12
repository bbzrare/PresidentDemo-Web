import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'Election';
  datetime: string = '';
  presidentsData = [
    { electionYear: '1', candidate: 'Washington G', votes: 'Adams J', winnerLoserIndic: '' },
    { electionYear: '2', candidate: 'Washington G', votes: 'Adams J', winnerLoserIndic: '' },
    { electionYear: '46', candidate: 'Nixon R M', votes: 'Agnew S T', winnerLoserIndic: '' },
    { electionYear: '47', candidate: 'Nixon R M', votes: 'Agnew S T', winnerLoserIndic: '' },
    { electionYear: '27', candidate: 'Garfield J A', votes: 'Arthur C A', winnerLoserIndic: '' },
  ];
  filteredData: any[] = [...this.presidentsData];

  // #region timedate
  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.datetime = now.toLocaleString();
  }
  // #endregion timedate

  // #region ฟังก์ชันสำหรับsearch
  onSearch(): void {
    console.log('Search term:', this.searchTerm);
    if (this.searchTerm.trim() === '') {
      // รีเซ็ตหรือโหลดข้อมูลทั้งหมดอีกครั้ง
      this.filteredData = [...this.presidentsData];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredData = this.presidentsData.filter(president =>
        president.electionYear.toLowerCase().includes(term) ||
        president.candidate.toLowerCase().includes(term) ||
        president.votes.toLowerCase().includes(term) ||
        president.winnerLoserIndic.toLowerCase().includes(term)
      );
    }
  }
  // #endregion ฟังก์ชันสำหรับsearch

  // #region ฟังก์ชันสำหรับตั้งค่าชื่อตาราง
  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
  // #endregion ฟังก์ชันสำหรับตั้งค่าชื่อตาราง
}