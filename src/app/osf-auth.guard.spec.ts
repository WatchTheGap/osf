import { TestBed } from '@angular/core/testing';

import { OsfAuthGuard } from './osf-auth.guard';

describe('OsfAuthGuard', () => {
  let guard: OsfAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OsfAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
