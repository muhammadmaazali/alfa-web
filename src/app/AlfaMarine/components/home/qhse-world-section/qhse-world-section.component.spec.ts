import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QhseWorldSectionComponent } from './qhse-world-section.component';

describe('QhseWorldSectionComponent', () => {
  let component: QhseWorldSectionComponent;
  let fixture: ComponentFixture<QhseWorldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QhseWorldSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QhseWorldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
