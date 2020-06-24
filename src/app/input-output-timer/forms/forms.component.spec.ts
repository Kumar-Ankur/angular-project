import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check `setInput` function', () => {
    component.timerLimit = 0;
    const event = {
      target: {
        value: 10,
      },
    };
    fixture.detectChanges();
    component.setInput(event);
    fixture.detectChanges();
    expect(component.timerLimit).toBe(10);
  });

  it('check handle button function', () => {
    component.timerLimit = 10;
    component.isTimerStart = false;
    component.startCount = 0;
    fixture.detectChanges();
    component.handleButton();
    fixture.detectChanges();
    expect(component.startCount).toBe(1);
  });

  it('check `handleReset function`', () => {
    component.timerLimit = 100;
    fixture.detectChanges();
    component.handleReset();
    fixture.detectChanges();
    expect(component.timerLimit).toBe(0);
  });

  it('check `IsStartVisible` function', () => {
    component.timerLimit = 10;
    component.isTimerStart = true;
    fixture.detectChanges();
    const visible: boolean = component.IsStartVisible();
    fixture.detectChanges();
    expect(visible).toBe(false);
  });
});
