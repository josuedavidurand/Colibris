import { TestBed, async, inject } from '@angular/core/testing';

import { AuthdocuGuard } from './authdocu.guard';

describe('AuthdocuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthdocuGuard]
    });
  });

  it('should ...', inject([AuthdocuGuard], (guard: AuthdocuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
