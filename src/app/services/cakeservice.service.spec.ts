import { TestBed } from '@angular/core/testing';

import { CakeserviceService } from './cakeservice.service';

describe('CakeserviceService', () => {
  let service: CakeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
