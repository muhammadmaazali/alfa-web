import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialInquiriesComponent } from './commercial-inquiries.component';

describe('CommercialInquiriesComponent', () => {
  let component: CommercialInquiriesComponent;
  let fixture: ComponentFixture<CommercialInquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialInquiriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
