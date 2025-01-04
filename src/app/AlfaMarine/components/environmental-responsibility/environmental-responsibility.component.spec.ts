import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalResponsibilityComponent } from './environmental-responsibility.component';

describe('EnvironmentalResponsibilityComponent', () => {
  let component: EnvironmentalResponsibilityComponent;
  let fixture: ComponentFixture<EnvironmentalResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalResponsibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
