import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerComponent } from './logger.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoggerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check `ngOnChanges hook`', () => {
    component.startList = ['1', '2'];
    const changes: SimpleChanges = {
      resetStartLog: {
        currentValue: true,
        previousValue: '',
        firstChange: false,
        isFirstChange: () => true,
      },
    };
    fixture.detectChanges();
    component.ngOnChanges(changes);
    fixture.detectChanges();
    expect(component.startList.length).toBe(0);
  });
});
