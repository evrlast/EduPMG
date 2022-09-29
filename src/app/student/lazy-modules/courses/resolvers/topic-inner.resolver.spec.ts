import { TestBed } from '@angular/core/testing';

import { TopicInnerResolver } from './topic-inner.resolver';

describe('TopicInnerResolver', () => {
  let resolver: TopicInnerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TopicInnerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
