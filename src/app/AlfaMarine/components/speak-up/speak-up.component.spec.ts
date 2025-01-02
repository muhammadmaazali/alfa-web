import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakUpComponent } from './speak-up.component';

describe('SpeakUpComponent', () => {
  let component: SpeakUpComponent;
  let fixture: ComponentFixture<SpeakUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
