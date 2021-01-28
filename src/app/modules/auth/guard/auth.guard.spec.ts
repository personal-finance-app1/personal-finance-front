import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = new AuthGuard(null,null);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
