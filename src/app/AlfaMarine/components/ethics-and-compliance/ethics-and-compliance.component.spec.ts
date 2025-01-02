import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsAndComplianceComponent } from './ethics-and-compliance.component';

describe('EthicsAndComplianceComponent', () => {
  let component: EthicsAndComplianceComponent;
  let fixture: ComponentFixture<EthicsAndComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthicsAndComplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthicsAndComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
