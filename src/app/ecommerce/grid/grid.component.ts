import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() products: any;
  @Input() sortby: string;
  @Input() isGridSelected: boolean;
  constructor() {}

  ngOnInit(): void {}
}
