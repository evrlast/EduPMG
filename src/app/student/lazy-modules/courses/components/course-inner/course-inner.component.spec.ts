import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInnerComponent } from './course-inner.component';

describe('CourseInnerComponent', () => {
  let component: CourseInnerComponent;
  let fixture: ComponentFixture<CourseInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
