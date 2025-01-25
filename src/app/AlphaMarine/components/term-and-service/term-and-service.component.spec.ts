import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermAndServiceComponent } from './term-and-service.component';

describe('TermAndServiceComponent', () => {
  let component: TermAndServiceComponent;
  let fixture: ComponentFixture<TermAndServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermAndServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermAndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
