import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
} from '@angular/material/toolbar';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';

import {MatTableModule} from '@angular/material/table';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
