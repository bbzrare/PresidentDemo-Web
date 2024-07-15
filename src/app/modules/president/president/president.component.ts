import { Component, OnInit } from '@angular/core';
import { PresidentService } from '../api/president.service';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn } from 'ng-zorro-antd/table';

interface President {
  presName: string;
  birthYr: number;
  yrsServ: number;
  deathAge: number;
  party: string;
  stateBorn: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<President> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<President> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.scss']
})
export class PresidentComponent implements OnInit {
  searchTerm: string = '';
  tableTitle: string = 'President';
  datetime: string = '';
  presidentsData: President[] = [];
  filteredData: President[] = [];
  listOfColumns: ColumnItem[] = [];

  constructor(private Presidentservice: PresidentService) { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
    this.loadPresidents();
    this.initColumns();
  }

  loadPresidents(): void {
    this.Presidentservice.getPresidents().subscribe(data => {
      console.log('Data received from API:', data);
      this.presidentsData = data;
      this.filteredData = data;
    }, error => {
      console.error('Error fetching Presidents:', error);
    });
  }

  updateDateTime(): void {
    const now = new Date();
    this.datetime = now.toLocaleString();
  }

  onSearch(): void {
    console.log('Search term:', this.searchTerm);
    if (this.searchTerm.trim() === '') {
      this.filteredData = [...this.presidentsData];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredData = this.presidentsData.filter(president => {
        const presName = president.presName ? String(president.presName).toLowerCase() : '';
        const birthYr = president.birthYr ? String(president.birthYr).toLowerCase() : '';
        const yrsServ = president.yrsServ ? String(president.yrsServ).toLowerCase() : '';
        const deathAge = president.deathAge ? String(president.deathAge).toLowerCase() : '';
        const party = president.party ? String(president.party).toLowerCase() : '';
        const stateBorn = president.stateBorn ? String(president.stateBorn).toLowerCase() : '';

        return presName.includes(term) ||
          birthYr.includes(term) ||
          yrsServ.includes(term) ||
          deathAge.includes(term) ||
          party.includes(term) ||
          stateBorn.includes(term);
      });
    }
    console.log('Filtered data:', this.filteredData);
  }

  initColumns(): void {
    this.listOfColumns = [
      {
        name: 'PresName',
        sortOrder: null,
        sortFn: (a: President, b: President) => a.presName.localeCompare(b.presName),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [],
        filterFn: null
      },
      {
        name: 'BirthYr',
        sortOrder: null,
        sortFn: (a: President, b: President) => a.birthYr - b.birthYr,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [
          { text: '1732', value: '1732' },
          { text: '1735', value: '1735' },
          { text: '1743', value: '1743' },
          { text: '1751', value: '1751' },
          { text: '1758', value: '1758' },
          { text: '1767', value: '1767' }
        ],
        filterFn: (list: string[], item: President) => {
          const birthYear = item.birthYr.toString();
          return list.some(value => {
            if (value === '1732') return birthYear.startsWith('1732');
            if (value === '1735') return birthYear.startsWith('1735');
            if (value === '1743') return birthYear.startsWith('1743');
            if (value === '1751') return birthYear.startsWith('1751');
            if (value === '1758') return birthYear.startsWith('1758');
            if (value === '1767') return birthYear.startsWith('1767');
            return false;
          });
        }
      },
      {
        name: 'YrsServ',
        sortOrder: null,
        sortFn: (a: President, b: President) => a.yrsServ - b.yrsServ,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [],
        filterFn: null
      },
      {
        name: 'DeathAge',
        sortOrder: null,
        sortFn: (a: President, b: President) => a.deathAge - b.deathAge,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [],
        filterFn: null
      },
      {
        name: 'Party',
        sortOrder: null,
        sortFn: (a: President, b: President) => a.party.localeCompare(b.party),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [],
        filterFn: null
      },
      {
        name: 'StateBorn',
        sortOrder: null,
        sortFn: (a: President, b: President) => a.stateBorn.localeCompare(b.stateBorn),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [],
        filterFn: null
      }
    ];
  }

  setTableTitle(title: string): void {
    this.tableTitle = title;
  }
}
