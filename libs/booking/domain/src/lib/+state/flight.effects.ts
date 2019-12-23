import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as FlightActions from './flight.actions';
import { FlightService } from '../infrastructure/flight.service';

@Injectable()
export class FlightEffects {

  loadFlights$ = createEffect(() => this.actions$.pipe( 
      ofType(FlightActions.loadFlights),
      switchMap(a =>
        this.flightService.find(a.from, a.to, a.urgent).pipe(
          map(flights => FlightActions.loadFlightsSuccess({ flights })),
          catchError(error => of(FlightActions.loadFlightsFailure({ error }))))
      )
    ));

  constructor(private actions$: Actions, private flightService: FlightService) {}

}
