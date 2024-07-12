import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.scss']
})
export class PresidentComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'President';
  datetime: string = '';
  presidentsData = [
    { presName: 'Adams J', birthYr: '1735', yrsServ: '4', deathAge: '90', party: 'Federalist', stateBorn:'Massachusetts' },
    { presName: 'Adams J Q', birthYr: '1767', yrsServ: '4', deathAge: '80', party: 'Demo-Rep', stateBorn:'Massachusetts' },
    { presName: 'Arthur C A', birthYr: '1830', yrsServ: '3', deathAge: '56', party: 'Republican', stateBorn:'Vermont' },
    { presName: 'Carter J E', birthYr: '1791', yrsServ: '4', deathAge: '77', party: 'Democratic', stateBorn:'Pensylvania' },
    { presName: 'Cleveland G', birthYr: '1924', yrsServ: '4', deathAge: '71', party: 'Democratic', stateBorn:'Georgia' },
    { presName: 'Coolidge C', birthYr: '1837', yrsServ: '8', deathAge: '60', party: 'Democratic', stateBorn:'New Jersey' },
    { presName: 'Eisenhower D D', birthYr: '1872', yrsServ: '5', deathAge: '79', party: 'Republican', stateBorn:'Vermont' },
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
        president.birthYr.toLowerCase().includes(term)||
        president.yrsServ.toLowerCase().includes(term)||
        president.deathAge.toLowerCase().includes(term)||
        president.party.toLowerCase().includes(term)||
        president.stateBorn.toLowerCase().includes(term)
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