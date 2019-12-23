import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFlight from './flight.reducer';

export const selectFlightState = createFeatureSelector<fromFlight.FlightBookingState>(
  fromFlight.flightBookingFeatureKey
);

export const selectFlights = createSelector(selectFlightState, s => s.flights);
export const selectFlightError = createSelector(selectFlightState, s => s.error);
export const selectHiddenFlights = createSelector(selectFlightState, s => s.hiddenFlights);
export const selectFilteredFlights = createSelector(
  selectFlights,
  selectHiddenFlights,
  (flights, hidden) => flights.filter(f => !hidden.includes(f.id)));