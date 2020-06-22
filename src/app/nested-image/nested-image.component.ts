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
    this.numbers = Array(11).fill(0);
    this.text = 'Floating Text Using Angular';
  }
  private height = 35;
  private width = 90;
  private top = 2;
  private left = 3;

  ngOnInit(): void {}

  getHeight(index: number) {
    return this.height - index * 3;
  }

  getWidth(index: number) {
    return this.width - index * 4;
  }

  getTop(index: number) {
    return this.top + index * 1.5;
  }

  getLeft(index: number) {
    return this.left + index * 2;
  }
}
