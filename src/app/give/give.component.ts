import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-give',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './give.component.html',
  styleUrl: './give.component.css'
})
export class GiveComponent {

}
