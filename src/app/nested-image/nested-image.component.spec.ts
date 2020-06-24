import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedImageComponent } from './nested-image.component';

describe('NestedImageComponent', () => {
  let component: NestedImageComponent;
  let fixture: ComponentFixture<NestedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NestedImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check `getHeight` function', () => {
    const index = 1;
    component.height = 30;
    fixture.detectChanges();
    const heightFn = component.getHeight(index);
    fixture.detectChanges();
    expect(heightFn).toBe(27);
  });

  it('check `getWidth` function', () => {
    const index = 1;
    component.width = 30;
    fixture.detectChanges();
    const widthFn = component.getWidth(index);
    fixture.detectChanges();
    expect(widthFn).toBe(26);
  });

  it('check `getTop` function', () => {
    const index = 2;
    component.top = 30;
    fixture.detectChanges();
    const topFn = component.getTop(index);
    fixture.detectChanges();
    expect(topFn).toBe(33);
  });

  it('check `getLeft` function', () => {
    const index = 2;
    component.left = 30;
    fixture.detectChanges();
    const leftFn = component.getLeft(index);
    fixture.detectChanges();
    expect(leftFn).toBe(34);
  });
});
