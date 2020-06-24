import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EcommerceComponent } from './ecommerce.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { SortByPipe } from './ecommerce.pipe';

describe('EcommerceComponent', () => {
  let component: EcommerceComponent;
  let fixture: ComponentFixture<EcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, EcommerceRoutingModule, NavigationModule, SpinnerModule, RouterTestingModule, HttpClientModule],
      declarations: [EcommerceComponent, GridComponent, ListComponent, SortByPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows product if loading is complete', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Products');
  });

  it('check if `onGridSelected` function is working fine', () => {
    component.isGridSelected = false;
    fixture.detectChanges();
    component.onGridSelected();
    fixture.detectChanges();
    expect(component.isGridSelected).toBe(true);
  });

  it('check if `onListSelected` function is working fine', () => {
    component.isGridSelected = true;
    fixture.detectChanges();
    component.onListSelected();
    fixture.detectChanges();
    expect(component.isGridSelected).toBe(false);
  });

  it('check if `filterToggle` function is working fine', () => {
    component.filterOpen = true;
    fixture.detectChanges();
    component.filterToggle();
    fixture.detectChanges();
    expect(component.filterOpen).toBe(false);
  });

  it('check if `removePrice` function is working fine', () => {
    component.filteredPrice = ['1', '2', '4'];
    fixture.detectChanges();
    component.removePrice('1');
    fixture.detectChanges();
    expect(component.filteredPrice).toEqual(['2', '4']);
  });

  it('check filteredList function if price is present in filteredPrice List', () => {
    component.filteredPrice = ['1', '2', '4'];
    fixture.detectChanges();
    component.filteredList('1');
    fixture.detectChanges();
    expect(component.sortby).toBe('');
  });

  it('check filteredList function if price is not present in filteredPrice List', () => {
    component.filteredPrice = ['1', '2', '4'];
    fixture.detectChanges();
    component.filteredList('Low to High');
    fixture.detectChanges();
    expect(component.sortby).toBe('asc');
  });
});
