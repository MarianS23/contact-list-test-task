import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL = [
  MatInputModule,
  MatTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule
]
const FORM = [
  ReactiveFormsModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL,
    ...FORM
  ],
  exports: [
    ...MATERIAL,
    ...FORM
  ]
})
export class SharedModuleModule { }
