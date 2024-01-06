import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  segmentos: HTMLElement[] = [];
  numSegmentos: number = 30; // Número de segmentos (cola)
  distanciaMaxima: number = 50; // Distancia máxima entre los segmentos

  ngOnInit(): void {
    for (let i = 0; i < this.numSegmentos; i++) {
      const segmento = document.createElement('div');
      segmento.classList.add('rayo', 'segmento');
      document.body.appendChild(segmento);
      this.segmentos.push(segmento);
    }

    this.actualizarSegmentos({ pageX: 0, pageY: 0 } as MouseEvent);
    document.addEventListener('mousemove', (event) => this.actualizarSegmentos(event));
  }

  actualizarSegmentos(event: MouseEvent): void {
    const posicionMouseX = event.pageX;
    const posicionMouseY = event.pageY;

    for (let i = this.segmentos.length - 1; i >= 0; i--) {
      const segmento = this.segmentos[i];
      const distancia = this.distanciaMaxima * (i / this.numSegmentos);
      const opacidad = Math.max(0, 1 - (i / this.numSegmentos));

      segmento.style.opacity = opacidad.toString();
      segmento.style.left = (posicionMouseX - distancia) + 'px';
      segmento.style.top = (posicionMouseY - distancia) + 'px';
      segmento.style.width = (2 + distancia * 0.1) + 'px'; // Ancho variable con la distancia
      segmento.style.height = (2 + distancia * 0.1) + 'px'; // Altura variable con la distancia
    }
  }
}

