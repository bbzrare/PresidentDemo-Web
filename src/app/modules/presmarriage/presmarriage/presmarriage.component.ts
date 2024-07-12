import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presmarriage',
  templateUrl: './presmarriage.component.html',
  styleUrls: ['./presmarriage.component.scss']
})
export class PresmarriageComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'Presmarriage';
  datetime: string = '';
  presidentsData = [
    { presName: 'Adams J', SpouseName: 'Smith A', PrAge: '28', SpAge: '19', Nrchildren: '5', MarYear: '1764' },
    { presName: 'Adams J Q', SpouseName: 'Johnson L C', PrAge: '30', SpAge: '22', Nrchildren: '4', MarYear: '1797' },
    { presName: 'Arthur C A', SpouseName: 'Herndon E L', PrAge: '29', SpAge: '22', Nrchildren: '3', MarYear: '1859' },
    { presName: 'Carter J E', SpouseName: 'Smith R', PrAge: '21', SpAge: '18', Nrchildren: '4', MarYear: '1946' },
    { presName: 'Cleveland G', SpouseName: 'Folson F', PrAge: '49', SpAge: '21', Nrchildren: '5', MarYear: '1886' },
    { presName: 'Coolidge C', SpouseName: 'Goodhue G A', PrAge: '33', SpAge: '26', Nrchildren: '2', MarYear: '1905' },
    { presName: 'Eisenhower D D', SpouseName: 'Doud G', PrAge: '25', SpAge: '19', Nrchildren: '2', MarYear: '1916' },
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
        president.SpouseName.toLowerCase().includes(term) ||
        president.PrAge.toLowerCase().includes(term) ||
        president.SpAge.toLowerCase().includes(term) ||
        president.Nrchildren.toLowerCase().includes(term) ||
        president.MarYear.toLowerCase().includes(term)
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