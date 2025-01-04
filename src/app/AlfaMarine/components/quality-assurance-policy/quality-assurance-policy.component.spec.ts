import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssurancePolicyComponent } from './quality-assurance-policy.component';

describe('QualityAssurancePolicyComponent', () => {
  let component: QualityAssurancePolicyComponent;
  let fixture: ComponentFixture<QualityAssurancePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssurancePolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityAssurancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
