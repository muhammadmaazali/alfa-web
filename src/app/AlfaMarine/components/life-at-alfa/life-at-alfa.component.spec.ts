import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtALFAComponent } from './life-at-alfa.component';

describe('LifeAtALFAComponent', () => {
  let component: LifeAtALFAComponent;
  let fixture: ComponentFixture<LifeAtALFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeAtALFAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeAtALFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
