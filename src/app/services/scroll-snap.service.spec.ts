import { TestBed } from '@angular/core/testing';

import { ScrollSnapService } from './scroll-snap.service';

describe('ScrollSnapService', () => {
  let service: ScrollSnapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSnapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
