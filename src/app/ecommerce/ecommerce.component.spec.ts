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
import { RouterModule } from '@angular/router';

describe('EcommerceComponent', () => {
  let component: EcommerceComponent;
  let fixture: ComponentFixture<EcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, EcommerceRoutingModule, NavigationModule, SpinnerModule, RouterTestingModule, HttpClientModule],
      declarations: [EcommerceComponent, GridComponent, ListComponent],
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
});
