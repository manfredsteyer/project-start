import { Action, createReducer, on } from '@ngrx/store';
import * as FlightActions from './flight.actions';
import { Flight } from '../domain/flight';

export const flightBookingFeatureKey = 'flightBooking';

export interface FlightBookingAppState {
  [flightBookingFeatureKey]: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[],
  error: string,
  hiddenFlights: number[]
}

export const initialState: FlightBookingState = {
  flights: [],
  error: '',
  hiddenFlights: [3]
};

const flightReducer = createReducer(
  initialState,

  on(FlightActions.loadFlights, (state, action) => {
    const flights = [];
    const error = '';
    return {...state, flights, error };
  }),

  on(FlightActions.loadFlightsSuccess, (state, action) => {
    const flights = action.flights;
    const error = '';
    return { ...state, flights, error };
  }),

  on(FlightActions.loadFlightsFailure, (state, action) => {
    const error = action.error;
    return { ...state, error };
  }),
);

export function reducer(state: FlightBookingState | undefined, action: Action) {
  return flightReducer(state, action);
}
