import { TestBed, inject } from '@angular/core/testing';

import { MseService } from './mse.service';

describe('MseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MseService]
    });
  });

  it('should be created', inject([MseService], (service: MseService) => {
    expect(service).toBeTruthy();
  }));
});
