import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAlfaComponent } from './about-alfa.component';

describe('AboutAlfaComponent', () => {
  let component: AboutAlfaComponent;
  let fixture: ComponentFixture<AboutAlfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAlfaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
