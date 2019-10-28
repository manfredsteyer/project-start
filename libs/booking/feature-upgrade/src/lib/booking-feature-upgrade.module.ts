import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@nx-flights/booking/domain';

@NgModule({
  imports: [CommonModule, BookingDomainModule.forRoot(),]
})
export class BookingFeatureUpgradeModule {}
