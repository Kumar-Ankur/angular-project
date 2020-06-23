import { Component, OnInit } from '@angular/core';
import { data } from './constant';
import * as _ from 'lodash';
import { TableInterface } from './table.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  tableHeading: string[];
  reset: boolean;
  sortAscending: boolean;
  sortDescending: boolean;
  sortCategory: string;
  previousCategory: string;
  sortCount: number;
  isArrowVisible: boolean;
  isUpArrowVisible: boolean;
  isDownArrowVisible: boolean;
  students: TableInterface[];
  resetStudents: TableInterface[];
  isLoading: boolean;

  constructor(private http: HttpClient) {
    this.tableHeading = [];
    this.students = [];
    this.resetStudents = [];
    this.reset = true;
    this.sortAscending = false;
    this.sortDescending = false;
    this.sortCategory = '';
    this.previousCategory = '';
    this.sortCount = 1;
    this.isArrowVisible = false;
    this.isUpArrowVisible = false;
    this.isDownArrowVisible = false;
    this.isLoading = true;
  }

  ngOnInit(): void {
    const API = 'https://angular-assessment-api.herokuapp.com/table';
    this.http.get<TableInterface>(API).subscribe((response) => {
      this.isLoading = false;
      this.tableHeading = Object.keys(response[0]);
      this.students = this.students.concat(response);
      this.resetStudents = this.resetStudents.concat(response);
    });
  }

  // Sort the table based on user click count
  // Count = 1 : reset the table
  // Count = 2 : sort table in ascending order
  // Count = 3 : sort table in descending order
  sortingTable(name: string, count: number): void {
    if (count === 2) {
      const sortedData: any = _.orderBy(this.students.slice(), [name], ['asc']);
      this.students = sortedData;
    } else {
      const sortedData: any = _.orderBy(this.students.slice(), [name], ['desc']);
      this.students = sortedData;
    }
  }

  // Function to update the sort count and call sortingTable function to sort the table accordingly.
  handleSort(name: string): void {
    if (!this.previousCategory) {
      this.previousCategory = name;
    } else {
      if (this.previousCategory !== name) {
        this.sortCount = 1;
        this.previousCategory = name;
      }
    }
    if (this.sortCount === 3) {
      this.sortCount = 1;
      this.students = this.resetStudents;
      this.sortCategory = '';
      return;
    } else {
      this.sortCategory = name;
      this.sortCount = this.sortCount + 1;
      this.sortingTable(name, this.sortCount);
    }
  }

  // Check if user is able to see downArrowIcon or not.
  checkDownArrowVisible(heading: string): boolean {
    if (heading === this.sortCategory && this.sortCount === 3) {
      this.isDownArrowVisible = true;
    } else {
      this.isDownArrowVisible = false;
    }
    return this.isDownArrowVisible;
  }

  // Check if user is able to see upArrowIcon or not.
  checkUpArrowVisible(heading: string): boolean {
    if (heading === this.sortCategory && this.sortCount === 2) {
      this.isUpArrowVisible = true;
    } else {
      this.isUpArrowVisible = false;
    }
    return this.isUpArrowVisible;
  }

  // Check if user is able to see any icon: (UpArrow/DownArrow) or not
  checkArrowVisible(): boolean {
    if (this.sortCount === 1) {
      this.isArrowVisible = false;
    } else {
      this.isArrowVisible = true;
    }

    return this.isArrowVisible;
  }
}
