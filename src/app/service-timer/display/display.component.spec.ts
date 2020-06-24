import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { TimerService } from '../service-timer.service';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check `ngOnInit` function', () => {
    component.timerValue = 0;
    const TimerServiceMock = fixture.debugElement.injector.get(TimerService);
    TimerServiceMock.setStartTime.next('10');
    // spyOn(TimerServiceMock, 'setStartTime').and.callFake(());
    fixture.detectChanges();
    TimerServiceMock.setTimerValue.subscribe((value) => {
      expect(value).toBe(10);
    });
  });

  it('check ngOnDestroy function', () => {
    component.timerValue = 10;
    fixture.detectChanges();
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component.timerValue).toBe(0);
  });
});
