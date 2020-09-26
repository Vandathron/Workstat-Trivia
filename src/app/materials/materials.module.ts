import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules from angular material

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule, MatRadioModule, MatButtonModule, MatSelectModule,MatListModule, MatDialogModule, MatFormFieldModule,MatInputModule
  ],
  exports: [
    MatCardModule, MatRadioModule, MatButtonModule, MatSelectModule,MatListModule, MatDialogModule, MatFormFieldModule,MatInputModule
  ]
})
export class MaterialsModule { }
