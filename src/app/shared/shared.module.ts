import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorPipe } from './pipes/theme-color.pipe';
import { NbSpinnerModule } from '@nebular/theme';



@NgModule({
  declarations: [ThemeColorPipe],
  imports: [
    CommonModule,
    NbSpinnerModule
  ],
  exports: [ThemeColorPipe, NbSpinnerModule]
})
export class SharedModule { }
