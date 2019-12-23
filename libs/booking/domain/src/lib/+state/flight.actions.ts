import { createAction, props } from '@ngrx/store';
import { Flight } from '../domain/flight';

export const loadFlights = createAction(
  '[Flight] Load Flights',
  props<{ from: string, to: string, urgent: boolean }>()
);

export const loadFlightsSuccess = createAction(
  '[Flight] Load Flights Success',
  props<{ flights: Flight[] }>()
);

export const loadFlightsFailure = createAction(
  '[Flight] Load Flights Failure',
  props<{ error: string  }>()
);
