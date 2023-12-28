import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      id: '1',
      date: 'Jun 2023 - Dec 2023',
      title: 'Web Development Practitioner',
      content: `During a period of six months I had the opportunity to work as web
                development at the company
                <a href="https://www.accedotechnologies.com" target="_blank">Accedo Technologies</a>
                , creating new modules for various projects within the company.`,
    },
  ];

}
