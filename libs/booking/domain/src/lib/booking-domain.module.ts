import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from './infrastructure/flight.service';
import { StoreModule } from '@ngrx/store';
import * as fromFlight from './+state/flight.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightEffects } from './+state/flight.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFlight.flightBookingFeatureKey, fromFlight.reducer),
    EffectsModule.forFeature([FlightEffects])
  ]
})
export class BookingDomainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BookingDomainModule,
      providers: [
        FlightService
      ]
    }
  }
}