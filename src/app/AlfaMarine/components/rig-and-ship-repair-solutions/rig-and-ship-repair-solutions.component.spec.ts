import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigAndShipRepairSolutionsComponent } from './rig-and-ship-repair-solutions.component';

describe('RigAndShipRepairSolutionsComponent', () => {
  let component: RigAndShipRepairSolutionsComponent;
  let fixture: ComponentFixture<RigAndShipRepairSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigAndShipRepairSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigAndShipRepairSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
