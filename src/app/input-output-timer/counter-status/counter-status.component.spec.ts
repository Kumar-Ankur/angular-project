import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStatusComponent } from './counter-status.component';

describe('CounterStatusComponent', () => {
  let component: CounterStatusComponent;
  let fixture: ComponentFixture<CounterStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain `Resume count` heading', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Resume count');
  });
});
