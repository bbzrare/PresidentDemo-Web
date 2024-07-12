import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'State';
  datetime: string = '';
  presidentsData = [
    { stateName: 'Alabama', adminEntered: '8', yearEntered: '1819'},
    { stateName: 'Alaska', adminEntered: '43', yearEntered: '1959'},
    { stateName: 'Arizona', adminEntered: '31', yearEntered: '1912'},
    { stateName: 'Arkansas', adminEntered: '12', yearEntered: '1836'},
    { stateName: 'California', adminEntered: '16', yearEntered: '1850'},
    { stateName: 'Colorado', adminEntered: '22', yearEntered: '1876'},
    { stateName: 'Connecticut', adminEntered: 'null', yearEntered: '1776'},
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
        president.stateName.toLowerCase().includes(term) ||
        president.adminEntered.toLowerCase().includes(term) ||
        president.yearEntered.toLowerCase().includes(term)
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
