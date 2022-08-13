import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CardComponent, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
