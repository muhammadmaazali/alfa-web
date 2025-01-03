import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLatestSectionComponent } from './news-latest-section.component';

describe('NewsLatestSectionComponent', () => {
  let component: NewsLatestSectionComponent;
  let fixture: ComponentFixture<NewsLatestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLatestSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLatestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
