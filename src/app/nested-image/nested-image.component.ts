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

  // Function to return the height based on nested container index.
  getHeight(index: number) {
    return this.height - index * 3;
  }

  // Function to return the width based on nested container index.
  getWidth(index: number) {
    return this.width - index * 4;
  }

  // Function to return the top based on nested container index.
  getTop(index: number) {
    return this.top + index * 1.5;
  }

  // Function to return the left based on nested container index.
  getLeft(index: number) {
    return this.left + index * 2;
  }
}
