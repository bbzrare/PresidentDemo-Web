import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pr-vp',
  templateUrl: './admin-pr-vp.component.html',
  styleUrls: ['']
})
export class AdminPrVpComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'Adminprvp';
  datetime: string = '';
  presidentsData = [
    { AdminNr: '1', PresName: 'Washington G', VicePresName: 'Adams J' },
    { AdminNr: '2', PresName: 'Washington G', VicePresName: 'Adams J' },
    { AdminNr: '46', PresName: 'Nixon R M', VicePresName: 'Agnew S T' },
    { AdminNr: '47', PresName: 'Nixon R M', VicePresName: 'Agnew S T' },
    { AdminNr: '27', PresName: 'Garfield J A', VicePresName: 'Arthur C A' },
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
        president.VicePresName.toLowerCase().includes(term)
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