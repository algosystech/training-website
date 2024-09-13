import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainingsComponent } from "./trainings/trainings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrainingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-website';
}
