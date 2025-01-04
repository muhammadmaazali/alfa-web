import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSafetyAndEnvironmentalPolicyComponent } from './health-safety-and-environmental-policy.component';

describe('HealthSafetyAndEnvironmentalPolicyComponent', () => {
  let component: HealthSafetyAndEnvironmentalPolicyComponent;
  let fixture: ComponentFixture<HealthSafetyAndEnvironmentalPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthSafetyAndEnvironmentalPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthSafetyAndEnvironmentalPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
