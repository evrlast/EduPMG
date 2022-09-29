import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInnerComponent } from './topic-inner.component';

describe('ToppicInnerComponent', () => {
  let component: TopicInnerComponent;
  let fixture: ComponentFixture<TopicInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
