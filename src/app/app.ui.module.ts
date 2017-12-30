import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule, MatCheckboxModule, MatListModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
  ],
  exports: [
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppUIModule { }
