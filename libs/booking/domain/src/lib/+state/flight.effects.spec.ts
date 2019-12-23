import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FlightEffects } from './flight.effects';

describe('FlightEffects', () => {
  let actions$: Observable<any>;
  let effects: FlightEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlightEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FlightEffects>(FlightEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
