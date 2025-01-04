import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPEAKUPComponent } from './speakup.component';

describe('SPEAKUPComponent', () => {
  let component: SPEAKUPComponent;
  let fixture: ComponentFixture<SPEAKUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPEAKUPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPEAKUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
