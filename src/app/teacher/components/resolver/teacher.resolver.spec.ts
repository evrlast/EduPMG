import { TestBed } from '@angular/core/testing';

import { TeacherResolver } from './teacher.resolver';

describe('TeacherResolver', () => {
  let resolver: TeacherResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TeacherResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
