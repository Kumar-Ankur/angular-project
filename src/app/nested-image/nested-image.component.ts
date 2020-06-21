import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-image',
  templateUrl: './nested-image.component.html',
  styleUrls: ['./nested-image.component.scss'],
})
export class NestedImageComponent implements OnInit {
  numbers;
  text;
  constructor() {
    this.numbers = Array(9).fill(0);
    this.text = 'Floating Text Using Angular';
  }
  private height = 50;
  private width = 130;
  private top = 2;
  private left = 3;

  ngOnInit(): void {}

  getHeight(index: number): number {
    return this.height - index * 5;
  }

  getWidth(index: number): number {
    return this.width - index * 10;
  }

  getTop(index: number): number {
    return this.top + index * 2.3;
  }

  getLeft(index: number): number {
    return this.left + index * 3.5;
  }
}
