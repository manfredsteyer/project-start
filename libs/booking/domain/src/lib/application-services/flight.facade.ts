import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Flight } from '../domain/flight';
import { FlightService } from '../infrastructure/flight.service';
import { Store } from '@ngrx/store';
import { loadFlightsSuccess, loadFlights } from '../+state/flight.actions';
import { FlightBookingAppState } from '../+state/flight.reducer';
import { selectFilteredFlights } from '../+state/flight.selectors';

@Injectable({ 
    providedIn: 'root'
})
export class FlightFacade1 {

    private flightsSubject = new BehaviorSubject<Flight[]>([]); 
    public flights$ = this.flightsSubject.asObservable();

    constructor(private flightService: FlightService) {
    }

    search(from: string, to: string, urgent: boolean): void {
        this.flightService.find(from, to, urgent).subscribe(
            flights => {
                this.flightsSubject.next(flights)
            },
            err => {
                console.error('err', err);
            }
        );
    }

    delay() {
        this.flights$.pipe(first()).subscribe(
            flights => {
                const oldFlight = flights[0];
                const flight = { ...oldFlight, date: (new Date()).toISOString() };
                const newFlights = [flight, ...flights.slice(1)];

                this.flightsSubject.next(newFlights)
            }
        )
    }

}



@Injectable({ providedIn: 'root' })
export class FlightFacade2 {

    // Before:
    // private flightsSubject = new BehaviorSubject<Flight[]>([]); 
    // public flights$ = this.flightsSubject.asObservable();

    // Now:
    public flights$ = this.store.select(s => s.flightBooking.flights);

    constructor(private store: Store<FlightBookingAppState>, private flightService: FlightService) {
    }

    search(from: string, to: string, urgent: boolean): void {
        this.flightService.find(from, to, urgent).subscribe(
            flights => {
                // Before:
                // this.flightsSubject.next(flights)

                // Now:
                this.store.dispatch(loadFlightsSuccess({ flights }));
            },
            err => {
                console.error('err', err);
            }
        );
    }

    delay() {
        this.flights$.pipe(first()).subscribe(
            flights => {
                const oldFlight = flights[0];
                const flight = { ...oldFlight, date: (new Date()).toISOString() };
                const newFlights = [flight, ...flights.slice(1)];

                // this.flightsSubject.next(newFlights)
                this.store.dispatch(loadFlightsSuccess({ flights }));
            }
        )
    }

}


@Injectable({ providedIn: 'root' })
export class FlightFacade {

    // Now:
    public flights$ = this.store.select(selectFilteredFlights);

    constructor(private store: Store<FlightBookingAppState>, private flightService: FlightService) {
    }

    search(from: string, to: string, urgent: boolean): void {
        this.store.dispatch(loadFlights({ from, to, urgent }))
    }

    delay() {
        this.flights$.pipe(first()).subscribe(
            flights => {
                const oldFlight = flights[0];
                const flight = { ...oldFlight, date: (new Date()).toISOString() };
                const newFlights = [flight, ...flights.slice(1)];

                // this.flightsSubject.next(newFlights)
                this.store.dispatch(loadFlightsSuccess({ flights }));
            }
        )
    }

}