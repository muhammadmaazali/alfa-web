import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingAndFabricationServicesComponent } from './welding-and-fabrication-services.component';

describe('WeldingAndFabricationServicesComponent', () => {
  let component: WeldingAndFabricationServicesComponent;
  let fixture: ComponentFixture<WeldingAndFabricationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeldingAndFabricationServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeldingAndFabricationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
