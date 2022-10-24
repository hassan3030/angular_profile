



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
const matComp = [MatBadgeModule];

@NgModule({

  imports: [
    CommonModule ,
    matComp
  ],
  exports: [matComp]
})
export class MaterialsModule { }
