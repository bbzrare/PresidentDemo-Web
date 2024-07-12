import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preshobby',
  templateUrl: './preshobby.component.html',
  styleUrls: ['./preshobby.component.scss']
})
export class PreshobbyComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'Preshobby';
  datetime: string = '';
  presidentsData = [
    { presName: 'Adams J Q', hobby: 'Billiards' },
    { presName: 'Garfield J A', hobby: 'Billiards' },
    { presName: 'Roosevelt T', hobby: 'Boxing' },
    { presName: 'Eisenhower D D', hobby: 'Bridge' },
    { presName: 'Hayes R B', hobby: 'Croquet' },
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
        president.presName.toLowerCase().includes(term) ||
        president.hobby.toLowerCase().includes(term)
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