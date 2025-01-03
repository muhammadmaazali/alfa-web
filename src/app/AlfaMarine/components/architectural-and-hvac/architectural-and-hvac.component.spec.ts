import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalAndHVACComponent } from './architectural-and-hvac.component';

describe('ArchitecturalAndHVACComponent', () => {
  let component: ArchitecturalAndHVACComponent;
  let fixture: ComponentFixture<ArchitecturalAndHVACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitecturalAndHVACComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitecturalAndHVACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
