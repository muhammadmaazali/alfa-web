import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingQuartersRefurbishmentComponent } from './living-quarters-refurbishment.component';

describe('LivingQuartersRefurbishmentComponent', () => {
  let component: LivingQuartersRefurbishmentComponent;
  let fixture: ComponentFixture<LivingQuartersRefurbishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingQuartersRefurbishmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingQuartersRefurbishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
