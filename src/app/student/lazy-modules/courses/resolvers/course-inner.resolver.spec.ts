import { TestBed } from '@angular/core/testing';

import { CourseInnerResolver } from './course-inner.resolver';

describe('CourseInnerResolver', () => {
  let resolver: CourseInnerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CourseInnerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
