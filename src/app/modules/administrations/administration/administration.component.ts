import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['']
})
export class AdministrationComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'Administration';
  datetime: string = '';
  presidentsData = [
    { AdminNr: '1', PresName: 'Washington G', YearInaugurated: '1789' },
    { AdminNr: '2', PresName: 'Washington G', YearInaugurated: '1793' },
    { AdminNr: '3', PresName: 'Adams J', YearInaugurated: '1797' },
    { AdminNr: '4', PresName: 'Jefferson T', YearInaugurated: '1801' },
    { AdminNr: '5', PresName: 'Jefferson T', YearInaugurated: '1805' },
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
        president.AdminNr.toLowerCase().includes(term) ||
        president.PresName.toLowerCase().includes(term) ||
        president.YearInaugurated.toLowerCase().includes(term)
      );
    }
    this.searchTerm = '';
  }
  // #endregion ฟังก์ชันสำหรับsearch

  // #region ฟังก์ชันสำหรับตั้งค่าชื่อตาราง
  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
  // #endregion ฟังก์ชันสำหรับตั้งค่าชื่อตาราง
}

