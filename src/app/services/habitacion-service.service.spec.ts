import { TestBed } from '@angular/core/testing';

import { HabitacionServiceService } from './habitacion-service.service';

describe('HabitacionServiceService', () => {
  let service: HabitacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
