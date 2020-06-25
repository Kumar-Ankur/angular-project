import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check handleSort function if no previousCategory and sort count to 1', () => {
    component.sortCount = 1;
    component.previousCategory = '';
    fixture.detectChanges();
    component.handleSort('test');
    fixture.detectChanges();

    expect(component.previousCategory).toBe('test');
    expect(component.sortCategory).toBe('test');
    expect(component.sortCount).toBe(2);
  });

  it('check sortingTable function', () => {
    component.students = [
      {
        id: 2,
        name: 'test2',
        class: 10,
        sub1: 'history',
        sub2: 'physics',
        sub3: 'chemistry',
      },
      {
        id: 1,
        name: 'test1',
        class: 10,
        sub1: 'history',
        sub2: 'physics',
        sub3: 'chemistry',
      },
    ];
    fixture.detectChanges();
    component.sortingTable('id', 2);
    const expectData = [
      {
        id: 1,
        name: 'test1',
        class: 10,
        sub1: 'history',
        sub2: 'physics',
        sub3: 'chemistry',
      },
      {
        id: 2,
        name: 'test2',
        class: 10,
        sub1: 'history',
        sub2: 'physics',
        sub3: 'chemistry',
      },
    ];
    expect(component.students).toEqual(expectData);
  });
});
