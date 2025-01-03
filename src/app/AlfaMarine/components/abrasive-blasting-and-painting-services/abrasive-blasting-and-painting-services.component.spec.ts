import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrasiveBlastingAndPaintingServicesComponent } from './abrasive-blasting-and-painting-services.component';

describe('AbrasiveBlastingAndPaintingServicesComponent', () => {
  let component: AbrasiveBlastingAndPaintingServicesComponent;
  let fixture: ComponentFixture<AbrasiveBlastingAndPaintingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrasiveBlastingAndPaintingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrasiveBlastingAndPaintingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
