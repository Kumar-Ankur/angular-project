import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if `Toggle navigation` is present', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Toggle navigation');
  });

  it('check if `ANGULAR` is present', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('ANGULAR');
  });

  it('check if a element of length 7', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a').length).toBe(7);
  });
});
