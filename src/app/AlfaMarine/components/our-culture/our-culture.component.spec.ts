import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCultureComponent } from './our-culture.component';

describe('OurCultureComponent', () => {
  let component: OurCultureComponent;
  let fixture: ComponentFixture<OurCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCultureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
