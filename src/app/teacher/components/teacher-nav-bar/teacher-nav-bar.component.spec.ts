import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNavBarComponent } from './teacher-nav-bar.component';

describe('TeacherNavBarComponent', () => {
  let component: TeacherNavBarComponent;
  let fixture: ComponentFixture<TeacherNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
