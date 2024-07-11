// my-component.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: [
    `
    `
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
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Arthur C A', Birth: '1830', YrsSery: '3', Deathage: '56', Party: 'Republican', StateBone: 'Vermont' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Arthur C A', Birth: '1830', YrsSery: '3', Deathage: '56', Party: 'Republican', StateBone: 'Vermont' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Arthur C A', Birth: '1830', YrsSery: '3', Deathage: '56', Party: 'Republican', StateBone: 'Vermont' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
    { Presname: 'Adams J', Birth: '1735', YrsSery: '4', Deathage: '90', Party: 'Federalist', StateBone: 'Massachusetts' },
    { Presname: 'Adams J Q', Birth: '1767', YrsSery: '4', Deathage: '80', Party: 'Demo-Rep', StateBone: 'Massachusetts' },
  ];
  filteredData: any[] = [...this.presidentsData];

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.datetime = now.toLocaleString();
  }

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

  // ฟังก์ชันสำหรับตั้งค่าชื่อตาราง
  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
}
