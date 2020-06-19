import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedImageComponent } from './nested-image.component';

describe('NestedImageComponent', () => {
  let component: NestedImageComponent;
  let fixture: ComponentFixture<NestedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
