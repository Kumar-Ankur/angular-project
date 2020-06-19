import { Component, OnInit } from '@angular/core';
import { data } from './constant';
import * as _ from 'lodash';

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
  students: {
    id: number;
    name: string;
    class: number;
    sub1: string;
    sub2: string;
    sub3: string;
  }[];
  resetStudents: {
    id: number;
    name: string;
    class: number;
    sub1: string;
    sub2: string;
    sub3: string;
  }[];
  constructor() {
    this.tableHeading = Object.keys(data[0]);
    this.students = data;
    this.resetStudents = data;
    this.reset = true;
    this.sortAscending = false;
    this.sortDescending = false;
    this.sortCategory = '';
    this.previousCategory = '';
    this.sortCount = 1;
    this.isArrowVisible = false;
    this.isUpArrowVisible = false;
    this.isDownArrowVisible = false;
  }

  ngOnInit(): void {}

  sortingTable(name: string, count: number): void {
    if (count === 2) {
      const sortedData: any = _.orderBy(this.students.slice(), [name], ['asc']);
      this.students = sortedData;
    } else {
      const sortedData: any = _.orderBy(
        this.students.slice(),
        [name],
        ['desc']
      );
      this.students = sortedData;
    }
  }

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

  checkDownArrowVisible(heading: string): boolean {
    if (heading === this.sortCategory && this.sortCount === 3) {
      this.isDownArrowVisible = true;
    } else {
      this.isDownArrowVisible = false;
    }
    return this.isDownArrowVisible;
  }

  checkUpArrowVisible(heading: string): boolean {
    if (heading === this.sortCategory && this.sortCount === 2) {
      this.isUpArrowVisible = true;
    } else {
      this.isUpArrowVisible = false;
    }
    return this.isUpArrowVisible;
  }

  checkArrowVisible(): boolean {
    if (this.sortCount === 1) {
      this.isArrowVisible = false;
    } else {
      this.isArrowVisible = true;
    }

    return this.isArrowVisible;
  }
}
