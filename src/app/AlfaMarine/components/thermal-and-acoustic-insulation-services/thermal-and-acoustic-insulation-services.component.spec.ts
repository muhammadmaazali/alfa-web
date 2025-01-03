import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalAndAcousticInsulationServicesComponent } from './thermal-and-acoustic-insulation-services.component';

describe('ThermalAndAcousticInsulationServicesComponent', () => {
  let component: ThermalAndAcousticInsulationServicesComponent;
  let fixture: ComponentFixture<ThermalAndAcousticInsulationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermalAndAcousticInsulationServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermalAndAcousticInsulationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
