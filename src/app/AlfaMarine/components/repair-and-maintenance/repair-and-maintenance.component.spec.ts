import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairAndMaintenanceComponent } from './repair-and-maintenance.component';

describe('RepairAndMaintenanceComponent', () => {
  let component: RepairAndMaintenanceComponent;
  let fixture: ComponentFixture<RepairAndMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairAndMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairAndMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
