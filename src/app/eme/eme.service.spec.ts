import { TestBed, inject } from '@angular/core/testing';

import { EmeService } from './eme.service';

describe('EmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmeService]
    });
  });

  it('should be created', inject([EmeService], (service: EmeService) => {
    expect(service).toBeTruthy();
  }));
});
