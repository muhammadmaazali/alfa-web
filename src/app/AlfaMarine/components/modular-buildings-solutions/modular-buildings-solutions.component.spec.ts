import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularBuildingsSolutionsComponent } from './modular-buildings-solutions.component';

describe('ModularBuildingsSolutionsComponent', () => {
  let component: ModularBuildingsSolutionsComponent;
  let fixture: ComponentFixture<ModularBuildingsSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModularBuildingsSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModularBuildingsSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
