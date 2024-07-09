import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: [
    `
    `
  ]
})
export class MyComponent {
  searchTerm: string = '';
  tableTitle: string = 'President'; // ค่าเริ่มต้นของชื่อตาราง
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
  ];
  filteredData: any[] = [...this.presidentsData]; // เริ่มต้นด้วยข้อมูลทั้งหมด

  onSearch(): void {
    console.log('Search term:', this.searchTerm);
    if (this.searchTerm.trim() === '') {
      // รีเซ็ตหรือโหลดข้อมูลทั้งหมดอีกครั้ง
      this.filteredData = [...this.presidentsData];
    } else {
      // กรองข้อมูลตาม searchTerm
      this.filteredData = this.presidentsData.filter(president =>
        president.Presname.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // ฟังก์ชันสำหรับตั้งค่าชื่อตาราง
  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
}
