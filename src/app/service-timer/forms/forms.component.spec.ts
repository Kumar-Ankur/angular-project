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

  it('check `onSelectedInput` function', () => {
    component.inputText = 0;
    const event = {
      target: {
        value: 10,
      },
    };
    fixture.detectChanges();
    component.onSelectedInput(event);
    fixture.detectChanges();
    expect(component.inputText).toBe(10);
  });

  it('check `handleReset` function', () => {
    component.inputText = 10;
    fixture.detectChanges();
    component.handleReset();
    fixture.detectChanges();
    expect(component.inputText).toBe(0);
  });

  it('check `IsStartVisible` function', () => {
    component.inputText = 10;
    component.isTimerStart = true;
    fixture.detectChanges();
    const visible = component.IsStartVisible();
    fixture.detectChanges();
    expect(visible).toBe(false);
  });

  it('check `setToInitialState` function', () => {
    component.startCount = 2;
    fixture.detectChanges();
    component.setToInitialState();
    fixture.detectChanges();
    expect(component.startCount).toBe(0);
  });

  it('check `handleStartPause` function if isTimerStart is false', () => {
    component.inputText = 10;
    component.isTimerStart = false;
    component.startCount = 0;
    fixture.detectChanges();
    component.handleStartPause();
    fixture.detectChanges();
    expect(component.startCount).toBe(1);
  });

  it('check `handleStartPause` function if isTimerStart is true', () => {
    component.inputText = 10;
    component.isTimerStart = true;
    component.pausedCount = 0;
    fixture.detectChanges();
    component.handleStartPause();
    fixture.detectChanges();
    expect(component.pausedCount).toBe(1);
  });
});
