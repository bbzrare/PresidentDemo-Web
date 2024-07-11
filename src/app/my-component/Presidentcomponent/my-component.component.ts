// my-component.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: [``
  ]
})
export class MyComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'President';
  datetime: string = '';
  presidentsData = [
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Arthur C A', Birth: '1830', YrsSery: '3', Deathage: '56', Party: 'Republican', StateBone: 'Vermont' },
    { Presname: 'Buchanan J', Birth: '1791', YrsSery: '4', Deathage: '77', Party: 'Democratic', StateBone: 'Pensylvania' },
    { Presname: 'Carter J E', Birth: '1924', YrsSery: '4', Deathage: '', Party: 'Democratic', StateBone: 'Georgia' },
    { Presname: 'Cleveland G', Birth: '1837', YrsSery: '8', Deathage: '71', Party: 'Democratic', StateBone: 'New Jersey' },
    { Presname: 'Coolidge C', Birth: '1872', YrsSery: '5', Deathage: '60', Party: 'Republican', StateBone: 'Vermont' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Arthur C A', Birth: '1830', YrsSery: '3', Deathage: '56', Party: 'Republican', StateBone: 'Vermont' },
    { Presname: 'Buchanan J', Birth: '1791', YrsSery: '4', Deathage: '77', Party: 'Democratic', StateBone: 'Pensylvania' },
    { Presname: 'Carter J E', Birth: '1924', YrsSery: '4', Deathage: '', Party: 'Democratic', StateBone: 'Georgia' },
    { Presname: 'Cleveland G', Birth: '1837', YrsSery: '8', Deathage: '71', Party: 'Democratic', StateBone: 'New Jersey' },
    { Presname: 'Coolidge C', Birth: '1872', YrsSery: '5', Deathage: '60', Party: 'Republican', StateBone: 'Vermont' },
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
        president.Presname.toLowerCase().includes(term) ||
        president.Birth.toLowerCase().includes(term) ||
        president.YrsSery.toLowerCase().includes(term) ||
        president.Deathage.toLowerCase().includes(term) ||
        president.Party.toLowerCase().includes(term) ||
        president.StateBone.toLowerCase().includes(term)
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
