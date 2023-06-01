import { TestBed } from '@angular/core/testing';

import { LocationFilterService } from './location-filter.service';

describe('LocationFilterService', () => {
  let service: LocationFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
