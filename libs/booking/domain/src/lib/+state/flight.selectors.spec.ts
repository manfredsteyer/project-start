import * as fromFlight from './flight.reducer';
import { selectFlightState } from './flight.selectors';

describe('Flight Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFlightState({
      [fromFlight.flightBookingFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
