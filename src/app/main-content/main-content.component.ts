import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
