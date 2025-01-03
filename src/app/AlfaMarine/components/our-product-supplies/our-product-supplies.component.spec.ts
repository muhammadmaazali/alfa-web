import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductSuppliesComponent } from './our-product-supplies.component';

describe('OurProductSuppliesComponent', () => {
  let component: OurProductSuppliesComponent;
  let fixture: ComponentFixture<OurProductSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductSuppliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProductSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
